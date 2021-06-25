import express from "express";
import { jobs } from "../controllers/jobs.js";

const router = express.Router();

router.route("/jobs").get(jobs);

export default router;
