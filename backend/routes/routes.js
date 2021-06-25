import express from "express";
import {
  allJobs,
  newJob,
  updateJob,
  deleteJob,
  fetchJob,
} from "../controllers/jobs.js";

// instantiate express router
const router = express.Router();

// Route to get all available jobs
router.route("/jobs").get(allJobs).post(newJob);

//Route to read/update/delete a specific job by its id
router.route("/job/:id").get(fetchJob).put(updateJob).delete(deleteJob);

export default router;
