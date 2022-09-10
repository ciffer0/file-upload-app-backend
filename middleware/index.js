const multer = require("multer");

const MIME_TYPES = {
    "video/x-matroska": "mkv",
  "application/pdf": "pdf",
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./files");
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(" ").join("_");
    console.log(name)
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + "." + extension);
  },
});

const multerMiddleware = multer({
  storage: storage,
}).single("upload-file");

module.exports = { multerMiddleware }
