import express from "express";
import {
  allJobs,
  userJobs,
  newJob,
  updateJob,
  deleteJob,
  applyJob,
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

// Route to get all available jobs
router
  .route("/jobs")
  .get(allJobs)
  .post(authMiddleware, roleMiddleware("employer"), newJob);

// route to display user jobs

router.route("/jobs/:uid").get(userJobs);

//Route to apply/update/delete a specific job by its id
router
  .route("/job/:id")
  .get(authMiddleware, roleMiddleware("employee"), applyJob)
  .put(authMiddleware, roleMiddleware("employer"), updateJob)
  .delete(authMiddleware, roleMiddleware("employer"), deleteJob);

// Route to register a user
router.route("/user/register").post(newUser);

// Route to login a user
router.route("/user/login").post(loginUser);

// Route to logout a user
router.route("/user/logout").get(authMiddleware, logoutUser);

// Route to get logged in user
router.route("/user/me").get(authMiddleware, loggedUser);

export default router;
