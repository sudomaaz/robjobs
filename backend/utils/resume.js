import path, { dirname } from "path";
import ErrorHandler from "./errorHandler.js";
import { fileURLToPath } from "url";
import { constants } from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));

// logic to upload resume on fs
const resumeUpload = async (file, next) => {
  const upload = new Promise((resolve, reject) => {
    if (!file) {
      return reject(
        next(new ErrorHandler("Please select a valid file for resume", 400))
      );
    }
    const ext = path.extname(file.name);
    if (ext !== ".pdf") {
      return reject(next(new ErrorHandler("Only pdf files are allowed", 400)));
    }
    const uploadPath = path.join(__dirname, process.env.UPLOAD_PATH, file.name);
    file.mv(uploadPath, function (err) {
      if (err) {
        return reject(next(new ErrorHandler("Error uploading resume", 400)));
      }
      resolve(file.name);
    });
  });
  return upload;
};

export default resumeUpload;
