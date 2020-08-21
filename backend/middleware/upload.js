const multer = require("multer");

const imageFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(" format file tidak didukung ", false);
  }
};

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/resources/static/asstes/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-kwitansimhs-${file.originalname}`);
  },
});
var uploadFile = multer({ storage: storage, fileFilter: imageFilter});
module.exports = uploadFile;