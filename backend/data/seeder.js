import { connectDB } from "../config/db.js";
import jobModel from "../models/jobs.js";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config({ path: "backend/config/.env" });

const rawData = fs.readFileSync("backend/data/jobs.json");

connectDB();

try {
  await jobModel.deleteMany();

  console.log("Deleted items");

  await jobModel.insertMany(JSON.parse(rawData));

  console.log("Inserted items");
  process.exit(0);
} catch (err) {
  console.log(err);
  process.exit(1);
}
