import jobModel from "../models/jobs.js";
import apiFeatures from "../utils/apiFeatures.js";

// fetch all jobs => GET /api/v1/jobs
export const allJobs = async (req, res, next) => {
  const api = new apiFeatures(jobModel.find(), req.query)
    .search()
    .filter()
    .sort();
  const jobs = await api.query;
  res.status(200).json({
    success: true,
    message: "This route displays all jobs",
    data: jobs,
  });
};

// Create a new Job => POST /api/v1/jobs
export const newJob = async (req, res, next) => {
  const job = await jobModel.create(req.body);
  res.status(201).json({
    success: true,
    message: "Job has been created successfully",
    data: job,
  });
};

// Get a specific job by its id => GET /api/v1/job/:id
export const fetchJob = async (req, res, next) => {
  const job = await jobModel.findById(req.params.id);
  if (!job) return;
  res.status(201).json({
    success: true,
    message: "Job is found",
    data: job,
  });
};

// update a specific job by its id => PUT /api/v1/job/:id
export const updateJob = async (req, res, next) => {
  let job = await jobModel.findById(req.params.id);
  if (!job) return;
  job = await jobModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(201).json({
    success: true,
    message: "This Job has been updated successfully",
    data: job,
  });
};

// delete a specific job by its id => DELETE /api/v1/job/:id
export const deleteJob = async (req, res, next) => {
  let job = await jobModel.findById(req.params.id);
  if (!job) return;
  await job.remove();
  res.status(200).json({
    success: true,
    message: "This job has been deleted successfully",
    data: null,
  });
};
