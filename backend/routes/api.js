const express = require('express');
const router = express.Router();
const UserController = require('../app/controllers/UserController');
const DocumentController = require('../app/controllers/DocumentController');
const passport = require('passport');

const multer  = require('multer');
const {pdfStorage, pdfFilter} = require('../app/services/MulterService');
const uploadPdf = multer({storage: pdfStorage, fileFilter: pdfFilter});

require('../app/middleware/Passport')(passport);

router.get('/', function (req, res, next) {
    res.json({status: "success", message: "Parcel Pending API", data: {"version_number": "v1.0.0"}})
});

router.post('/register', UserController.create);
router.post('/login', UserController.login);
router.get('/user/current', passport.authenticate('jwt', {session: false}), UserController.getCurrent);

router.post('/documents', [passport.authenticate('jwt', {session: false}), uploadPdf.single('pdf_file')], DocumentController.create);
router.get('/documents', passport.authenticate('jwt', {session: false}), DocumentController.getAll);
router.delete('/documents/:document_id', passport.authenticate('jwt', {session: false}), DocumentController.remove);

module.exports = router;