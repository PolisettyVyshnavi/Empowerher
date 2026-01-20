import multer from "multer";

// Use memory storage—no local files
const storage = multer.memoryStorage();

// Accept only images, limit size (e.g., 2MB)
const fileFilter = (req, file, cb) => {
  if (!file.mimetype.startsWith("image/")) {
    return cb(new Error("Only image files are allowed"), false);
  }
  cb(null, true);
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 2 * 1024 * 1024 } // 2MB
});

export default upload.single("profile");