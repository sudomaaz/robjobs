import jobModel from "../models/jobs.js";

// All Jobs request logic => GET /api/v1/jobs
export const allJobs = async (req, res, next) => {
  res.status(200).send({
    success: true,
    message: "This route displays all jobs",
  });
};

export const newJob = async (req, res, next) => {
  const job = await jobModel.create(req.body);
  res.status(201).json({
    success: true,
    message: "Job has been created successfully",
    data: job,
  });
};
