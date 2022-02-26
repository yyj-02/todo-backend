// src/server.ts
import express, { urlencoded } from "express";
import helmet from "helmet";
import cors from "cors";
import logger from "morgan";
import { dbConnect } from "./config/db";
import { router } from "./routers/todo";
require("dotenv").config();

// Using express.js
const app = express();
dbConnect();

// Initialize middlewares
app.use(cors({ origin: true, credentials: true }));
app.use(helmet());
app.use(urlencoded({ extended: false }));
app.use(express.json());
app.use(logger("combined"));

// Running the server
app.get("/", (req, res) => res.send("Server is running"));
app.use("/api/todo", router);

// Listening ports
const PORT = 8080;

app.listen(PORT, "127.0.0.1", () => {
  console.log(`Server is running on http://127.0.0.1:${PORT}`);
});
