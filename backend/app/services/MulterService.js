const multer = require('multer');
const uuidv1 = require('uuid/v1');

const pdfStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads/pdfs')
    },
    filename: function (req, file, cb) {
        cb(null, uuidv1() + '-' + file.originalname)
    }
});

const pdfFilter = function (req, file, cb) {
    if (!file.originalname.match(/\.(pdf)$/)) {
        return cb(null, false);
    }
    cb(null, true);
};

module.exports = {pdfStorage, pdfFilter};
