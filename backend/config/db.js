import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => {
      console.log(
        `Database connection successfull.Host: ${conn.connection.host}`
      );
    })
    .catch((err) => {
      console.log(`Unable to connect to database.Error: ${err.message}`);
      process.exit(1);
    });
};
