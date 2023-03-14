import express from "express";
import { MongoClient } from "mongodb";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();
import usersRouter from "./routes/user.route.js";
import contentRouter from "./routes/content.route.js";

const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(cors());

const MONGO_URL = process.env.DB;
export const client = new MongoClient(MONGO_URL);
client.connect();
console.log("mongo connected");

app.use("/user", usersRouter);
app.use("/content", contentRouter);

app.listen(PORT, () => console.log("app started in PORT", PORT));
