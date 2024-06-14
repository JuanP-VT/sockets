import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const app: Express = express();
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
console.log("Running with Typescript");
app.listen(3000);
