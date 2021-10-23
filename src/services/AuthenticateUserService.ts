import axios from "axios";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IAccessTokenResponse {
    access_token: string;
    error?: string;
}

interface IUserResponse {
    avatar_url: string;
    login: string;
    id: number;
    name: string;
}

export class AuthenticateUserService {
    static async execute(code: string) {
        const userRepository = getCustomRepository(UsersRepositories);

        const url = "https://github.com/login/oauth/access_token";

        const { data: accessTokenResponse } =
            await axios.post<IAccessTokenResponse>(url, null, {
                params: {
                    client_id: process.env.GITHUB_CLIENT_ID,
                    client_secret: process.env.GITHUB_CLIENT_SECRET,
                    code,
                },
                headers: {
                    Accept: "application/json",
                },
            });

        if (accessTokenResponse.error) throw new Error("bad_verification_code");

        const response = await axios.get<IUserResponse>(
            "https://api.github.com/user",
            {
                headers: {
                    authorization: `Bearer ${accessTokenResponse.access_token}`,
                },
            }
        );

        const { id, avatar_url, login, name } = response.data;

        let user = await userRepository.findOne({
            where: { github_id: id },
        });

        if (!user) {
            user = userRepository.create({
                github_id: id,
                name,
                avatar_url,
                login,
            });

            await userRepository.save(user);
        }

        const token = sign(
            {
                user: {
                    name: user.name,
                    avatar_url: user.avatar_url,
                    id: user.id,
                },
            },
            process.env.TOKEN_SECRET,
            {
                subject: user.id,
                expiresIn: "1d",
            }
        );

        const { created_at, updated_at, ...userData } = user;

        return { token, user: { ...userData } };
    }
}
