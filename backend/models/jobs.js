import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      trim: true,
      required: [true, "Please enter company name"],
    },
    title: {
      type: String,
      trim: true,
      required: [true, "Please enter job title"],
      maxLength: [100, "Job title cannot exceed 100 characters"],
    },
    description: {
      type: String,
      trim: true,
      required: [true, "Please enter job description"],
      maxLength: [1000, "Job description cannot exceed 1000 characters"],
    },
    category: {
      type: String,
      required: true,
      enum: {
        values: [
          "Information Technology",
          "Banking and Retail",
          "Education and Training",
          "Others",
        ],
        message: "Please select a valid category",
      },
    },
    experience: {
      type: String,
      required: true,
      enum: {
        values: [
          "Fresher",
          "1 year - 2 years",
          "2 years - 5 years",
          "5+ years",
        ],
        message: "Please select a valid option for experience level",
      },
    },
    ctcMin: {
      type: Number,
      required: [true, "Please enter a minimum ctc"],
      trim: true,
    },
    ctcMax: {
      type: Number,
      required: [true, "Please enter a maximum ctc"],
      trim: true,
    },
    location: {
      type: String,
      required: [true, "Please enter job location"],
      trim: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      select: false,
      ref: "User",
    },
    applied: {
      type: [Object],
      select: false,
    },
  },
  {
    timestamps: true,
  }
);

const jobModel = mongoose.model("Job", jobSchema);

export default jobModel;
