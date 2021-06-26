// error middleware

const errorMiddleware = (err, req, res, next) => {
  const message = err.message || "Internal Server Error";
  const statusCode = err.statusCode || 500;

  // if production then do not send error stack
  if (process.env.NODE_ENV === "production") {
    res.status(statusCode).json({
      success: false,
      error: err.message,
    });
  } else {
    res.status(statusCode).json({
      success: false,
      error: err.stack,
    });
  }
};

export default errorMiddleware;
