import userModel from "../models/users.js";
import asyncHandler from "express-async-handler";
import ErrorHandler from "../utils/errorHandler.js";

// Create a new User => POST /api/v1/user/register
export const newUser = asyncHandler(async (req, res, next) => {
  const user = await userModel.create(req.body);
  const token = user.getJwtToken();
  res.status(201).json({
    success: true,
    message: "User has been registered successfully",
    data: token,
  });
});

// Login a User => POST /api/v1/user/login
export const loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const token = user.getJwtToken();
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  res.status(201).cookie("token", token, options).json({
    success: true,
    message: "User has been registered successfully",
    data: token,
  });
});
