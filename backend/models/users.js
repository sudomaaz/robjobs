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
    role: {
      type: String,
      required: true,
      enum: {
        values: ["employee", "employer"],
        message: "Please select a valid user role",
      },
      default: "employee",
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

userSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

const userModel = mongoose.model("User", userSchema);

export default userModel;
