import dotenv from "dotenv";
import connectionDB from "./src/config/db.js";
import app from "./src/app.js";
import { seedData } from "./src/utils/seedData.js";

dotenv.config();
connectionDB();
// seedData();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})