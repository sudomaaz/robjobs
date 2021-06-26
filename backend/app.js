import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import router from "./routes/routes.js";
import errorMiddleware from "./middlewares/errors.js";

// instantiate express
const app = express();

// read and setup environment variables
dotenv.config({ path: "./backend/config/.env" });

// connect to database
connectDB();

// enable body-parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// use pre-defined routes for every API request
app.use("/api/v1", router);

// handle unhandled routes
app.all("*", (req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Resource not found 404",
  });
});

// apply error handle middleware
app.use(errorMiddleware);

// get server port from env
const PORT = process.env.PORT || 5000;

// get application mode from env
const MODE = process.env.NODE_ENV;

// start the server
app.listen(PORT, () =>
  console.log(`Server is running on port ${PORT} in ${MODE} mode`)
);
