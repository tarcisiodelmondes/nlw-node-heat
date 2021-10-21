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

        return messages;
    }
}
