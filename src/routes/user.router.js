const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'temp/' });
const {registerUser,registerUserCredentials,registerYourdocFolder,registerYourdocDocument,getUserCredentials,getAllYourdocFolder,getAllYourdocDocuments,getUser} = require('../controllers/user.controller');

router.post('/register',registerUser);
router.route('/').get(getUser);
router.route('/credential').post(registerUserCredentials)
    .get(getUserCredentials);
router.route('/yourdoc/folder').post(registerYourdocFolder)
    .get(getAllYourdocFolder);
router.route('/yourdoc/folder/:folderId')
    .post(upload.single('file'), registerYourdocDocument)
    .get(getAllYourdocDocuments);


module.exports = router;
