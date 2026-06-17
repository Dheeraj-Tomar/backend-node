const fs = require('fs');
const path = require('path');
const multer = require('multer');

const uploadDirectory = process.env.UPLOADS_DIR
  ? path.isAbsolute(process.env.UPLOADS_DIR)
    ? path.join(process.env.UPLOADS_DIR, 'general')
    : path.join(__dirname, '..', process.env.UPLOADS_DIR, 'general')
  : path.join(__dirname, '..', 'uploads', 'general');
fs.mkdirSync(uploadDirectory, { recursive: true });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDirectory);
  },
  filename: function (req, file, cb) {
    const timestamp = Date.now();
    const safeName = file.originalname.replace(/[^a-zA-Z0-9.-]/g, '_');
    cb(null, `${timestamp}-${safeName}`);
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024,
  },
});

module.exports = upload;
