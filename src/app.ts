import express from "express";
import "reflect-metadata";

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Running in http://localhost:${PORT}`);
});
