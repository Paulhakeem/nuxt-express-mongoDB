
const multer  = require('multer')


// Set up storage for uploaded files
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname);
    }
  });
  
  // Create the multer instance
  const upload = multer({ storage: storage });
  
  module.exports = upload;