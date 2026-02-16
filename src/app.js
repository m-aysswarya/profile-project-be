import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import profileRoutes from "./routers/profileRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();
const allowedOrigins = [
    "http://localhost:5173",
    process.env.FRONTEND_URL,
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true
}));

app.use(express.json());

app.use("/api/profile", profileRoutes);

app.use(errorHandler);

export default app;