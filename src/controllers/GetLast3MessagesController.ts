import { Response } from "express";
import { GetLast3MessageService } from "../services/GetLast3MessagesService";

export class GetLast3MessagesController {
    async handle(_: any, res: Response) {
        const result = await GetLast3MessageService.execute();

        return res.json(result);
    }
}
