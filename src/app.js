import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import profileRoutes from "./routers/profileRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();
app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://profile-project-pi.vercel.app"
    ],
    credentials: true
}));

app.use(express.json());

app.use("/api/profile", profileRoutes);

app.use(errorHandler);

export default app;