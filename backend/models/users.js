import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxLength: [50, "name cannot exceed 50 characters"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      unique: true,
      validate: [validator.isEmail, "Please enter correct email address"],
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
      minLength: [6, "password must be atleast 6 characters"],
      select: false,
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
    role: {
      type: String,
      required: true,
      enum: {
        values: ["employee", "employer"],
        message: "Please select a valid user role",
      },
    },
    resume: {
      type: String,
      select: false,
    },
    applied: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Job",
      select: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePwd = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

const userModel = mongoose.model("User", userSchema);

export default userModel;
