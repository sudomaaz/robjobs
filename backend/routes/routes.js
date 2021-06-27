import express from "express";
import {
  allJobs,
  newJob,
  updateJob,
  deleteJob,
  fetchJob,
} from "../controllers/jobs.js";

import { newUser, loginUser, logoutUser } from "../controllers/users.js";

import authMiddleware from "../middlewares/auth.js";

// instantiate express router
const router = express.Router();

// Route to get all available jobs
router.route("/jobs").get(allJobs).post(authMiddleware, newJob);

//Route to read/update/delete a specific job by its id
router
  .route("/job/:id")
  .get(fetchJob)
  .put(authMiddleware, updateJob)
  .delete(authMiddleware, deleteJob);

// Route to register a user
router.route("/user/register").post(newUser);

// Route to login a user
router.route("/user/login").post(loginUser);

// Route to logout a user
router.route("/user/logout").get(authMiddleware, logoutUser);

export default router;
