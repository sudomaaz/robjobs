export const jobs = (req, res, next) => {
  res.status(200).send({
    success: true,
    message: "This route displays all jobs",
  });
};
