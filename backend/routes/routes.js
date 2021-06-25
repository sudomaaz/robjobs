import express from "express";
import { allJobs, newJob } from "../controllers/jobs.js";

// instantiate express router
const router = express.Router();

// Route to get all/create new jobs
router.route("/jobs").get(allJobs).post(newJob);

export default router;
