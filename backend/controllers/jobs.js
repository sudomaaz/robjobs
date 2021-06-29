import jobModel from "../models/jobs.js";
import apiFeatures from "../utils/apiFeatures.js";
import asyncHandler from "express-async-handler";
import ErrorHandler from "../utils/errorHandler.js";
import mongoose from "mongoose";

// fetch all jobs => GET /api/v1/jobs
export const allJobs = asyncHandler(async (req, res, next) => {
  const total = await jobModel.countDocuments();
  const api = new apiFeatures(jobModel.find(), req.query).search().sort();
  const jobs = await api.query;
  res.status(200).json({
    success: true,
    message: total,
    data: jobs,
  });
});

// fetch all jobs applied by user => GET /api/v1/jobs/:uid
export const userJobs = asyncHandler(async (req, res, next) => {
  const { uid } = req.params;
  const jobs = await jobModel.find({ applied: uid }).sort({ updatedAt: -1 });
  res.status(200).json({
    success: true,
    message: jobs.length,
    data: jobs,
  });
});

// Create a new Job => POST /api/v1/jobs
export const newJob = asyncHandler(async (req, res, next) => {
  const job = await jobModel.create(req.body);
  res.status(201).json({
    success: true,
    message: "Job has been created successfully",
    data: job,
  });
});

// Apply to a specific job by its id => GET /api/v1/job/:id
export const applyJob = asyncHandler(async (req, res, next) => {
  const job = await jobModel.findById(req.params.id).select("+applied");
  let alreadyApplied = false;
  if (!job) {
    return next(new ErrorHandler("Job not found", 404));
  }
  if (job.applied.includes(req.user._id)) {
    alreadyApplied = true;
  } else {
    job.applied.push(req.user._id);
    await job.save();
  }
  const data = {
    jid: job._id,
    alreadyApplied,
  };
  res.status(200).json({
    success: true,
    message: "Applied successfully for this job",
    data: data,
  });
});
