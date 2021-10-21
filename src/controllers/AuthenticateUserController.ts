import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";

export class AuthenticateUserController {
  async handle(req: Request, res: Response) {
    const { code } = req.body;

    const result = await AuthenticateUserService.execute(code);

    return res.json(result);
  }
}
