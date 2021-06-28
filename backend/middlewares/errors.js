// error middleware

const errorMiddleware = (err, req, res, next) => {
  const message = err.message || "Internal Server Error";
  const statusCode = err.statusCode || 500;

  // if production then do not send error stack
  if (process.env.NODE_ENV === "production") {
    if (err.name === "CastError") {
      err.message = "Resource not found error.Please try again";
      err.statusCode = 404;
    } else if (err.name === "ValidationError") {
      const message = Object.values(err.errors).map((e) => e.message);
      err.message = message;
    }
    res.status(statusCode).json({
      success: false,
      message: err.message,
    });
  } else {
    res.status(statusCode).json({
      success: false,
      error: err,
      errorMsg: err.message,
      errorStack: err.stack,
    });
  }
};

export default errorMiddleware;
