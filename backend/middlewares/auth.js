import jwt from "jsonwebtoken";
import userModel from "../models/users.js";
import asyncHandler from "express-async-handler";
import ErrorHandler from "../utils/errorHandler.js";

// authentication middleware
const authMiddleware = asyncHandler(async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return next(
      new ErrorHandler("You need to login first to access this page", 403)
    );
  }
  const uid = jwt.verify(token, process.env.JWT_SECRET);
  const user = await userModel.findById(uid.id);
  if (!user) {
    return next(
      new ErrorHandler("You are not authorized to access this page", 403)
    );
  }
  req.user = user;
  next();
});

export default authMiddleware;
