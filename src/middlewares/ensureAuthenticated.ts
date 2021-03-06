import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const authToken = req.headers.authorization;

    if (!authToken) {
        throw new Error("token invalid");
    }

    const [, token] = authToken.split(" ");

    try {
        const { sub } = verify(token, process.env.TOKEN_SECRET) as IPayload;

        req.user_id = sub;

        return next();
    } catch (err) {
        throw new Error("token invalid");
    }
}
