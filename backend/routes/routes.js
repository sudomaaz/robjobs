import express from "express";
import {
  allJobs,
  userJobs,
  newJob,
  applyJob,
  jobUsers,
} from "../controllers/jobs.js";

import {
  newUser,
  loginUser,
  logoutUser,
  loggedUser,
} from "../controllers/users.js";

import { authMiddleware, roleMiddleware } from "../middlewares/auth.js";

// instantiate express router
const router = express.Router();

// Route to get all/create new jobs
router
  .route("/jobs")
  .get(allJobs)
  .post(authMiddleware, roleMiddleware("employer"), newJob);

// route to display users who applied to a recruiter
router
  .route("/jobs/users/:id")
  .get(authMiddleware, roleMiddleware("employer"), jobUsers);

// route to display jobs applied by a user
router
  .route("/jobs/:uid")
  .get(authMiddleware, roleMiddleware("employee"), userJobs);

//Route to apply to a specific job by its id
router
  .route("/job/:id")
  .get(authMiddleware, roleMiddleware("employee"), applyJob);

// Route to register a user
router.route("/user/register").post(newUser);

// Route to login a user
router.route("/user/login").post(loginUser);

// Route to logout a user
router.route("/user/logout").get(authMiddleware, logoutUser);

// Route to get logged in user
router.route("/user/me").get(authMiddleware, loggedUser);

export default router;
