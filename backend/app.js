import express from "express";
import dotenv from "dotenv";
import router from "./routes/routes.js";

const app = express();

dotenv.config({ path: "./backend/config/.env" });

app.use("/api/v1", router);

app.use("/", (req, res, next) => res.send("<h1>Welcome to domaincer</h1>"));

const PORT = process.env.PORT || 5000;
const MODE = process.env.NODE_ENV;

app.listen(PORT, () =>
  console.log(`Server is running on port ${PORT} in ${MODE} mode`)
);
