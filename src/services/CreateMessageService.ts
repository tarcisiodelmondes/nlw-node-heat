import { getCustomRepository } from "typeorm";
import { io } from "../app";

import { MessagesRepositories } from "../repositories/MessagesRepositories";

export class CreateMessageService {
    static async execute(text: string, user_id: string) {
        const messagesRepository = getCustomRepository(MessagesRepositories);

        const message = messagesRepository.create({
            text,
            user_id,
        });

        await messagesRepository.save(message, {});

        const messagesWithDateUser = await messagesRepository.findOne({
            where: { id: message.id },
            relations: ["userId"],
        });

        const infoWS = {
            text: messagesWithDateUser.text,
            user_id: messagesWithDateUser.user_id,
            created_at: messagesWithDateUser.created_at,
            user: {
                name: messagesWithDateUser.userId.name,
                avatar_url: messagesWithDateUser.userId.avatar_url,
            },
        };

        io.emit("new_message", infoWS);

        return messagesWithDateUser;
    }
}
