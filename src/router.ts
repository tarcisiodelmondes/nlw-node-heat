import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { GetLast3MessagesController } from "./controllers/GetLast3MessagesController";
import { ProfileUserController } from "./controllers/ProfileUserController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router();

const authenticateUserController = new AuthenticateUserController();
const createMessagesController = new CreateMessageController();
const getLast3MessagesController = new GetLast3MessagesController();
const profileUserController = new ProfileUserController();

router.get("/github", (_, res) => {
    res.redirect(
        `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
    );
});

router.get("/sign-in/callback", (req, res) => {
    const { code } = req.query;

    return res.json(code);
});

router.post("/authenticate", authenticateUserController.handle);
router.post("/messages", ensureAuthenticated, createMessagesController.handle);
router.get("/messages/last3", getLast3MessagesController.handle);
router.get("/profile", ensureAuthenticated, profileUserController.handle);

export { router };
