import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

export class ProfileUserService {
    static async execute(user_id: string) {
        const userRepository = getCustomRepository(UsersRepositories);

        const user = await userRepository.findOne({ where: { id: user_id } });
	const {created_at, updated_at, ...userData} = user	

        return {...userData};
    }
}
