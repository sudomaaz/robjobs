import express from "express";
import dotenv from "dotenv";

const app = express();

dotenv.config({ path: "./config/.env" });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
