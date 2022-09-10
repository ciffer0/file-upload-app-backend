const express = require('express');
const { uploadNewFile, getAllFiles, deleteFile } = require('../controllers')
const { multerMiddleware } = require('../middleware')

const router = express.Router();


// * Get all files
router.get('/getAllFiles', getAllFiles);

// * Post new file
router.post('/uploadNewFile', multerMiddleware,uploadNewFile);

// * Delete file by id
router.delete('/deleteFile/:id', deleteFile);



module.exports = router;