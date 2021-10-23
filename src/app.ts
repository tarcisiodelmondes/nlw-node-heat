import "dotenv/config";
import "reflect-metadata";
import "express-async-errors";

import express, { NextFunction, Request, Response } from "express";
import { router } from "./router";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

import "./database";

const app = express();
app.use(cors());

const serverHttp = http.createServer(app);

const io = new Server(serverHttp, { cors: { origin: "*" } });

io.on("connection", (socket) => {
    console.log(`Usuário conectado  no socket ${socket.id}`);
});

app.use(express.json());
app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err.message === "token invalid") {
        return res.status(401).json({
            error: err.message,
        });
    }

    if (err.message === "bad_verification_code") {
        return res.status(401).json({
            error: "The code passed is incorrect or expired",
        });
    }

    return res.status(500).json({
        status: "error",
        message: "Internal Server Error",
    });
});

export { serverHttp, io };
