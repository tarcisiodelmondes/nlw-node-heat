import { getCustomRepository } from "typeorm";
import { MessagesRepositories } from "../repositories/MessagesRepositories";

export class GetLast3MessageService {
    static async execute() {
        const messagesRepository = getCustomRepository(MessagesRepositories);

        const messages = await messagesRepository.find({
            take: 3,
            order: {
                created_at: "DESC",
            },
            relations: ["userId"],
        });

        const formattedMessages = messages.map((message) => {
            return {
                text: message.text,
                id: message.id,
                created_at: message.created_at,
                user: {
                    ...message.userId,
                },
            };
        });

        return formattedMessages;
    }
}
