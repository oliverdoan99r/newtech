const router = require('express').Router()
const uploadImage = require('../middleware/uploadImage')
const deleteImage = require('../middleware/deleteImage')
const uploadCtrl = require('../controllers/uploadCtrl')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')

router.post('/upload_avatar', uploadImage, auth, uploadCtrl.uploadAvatar)

router.post('/upload_admin', uploadImage, uploadCtrl.uploadImgAdmin)

router.post('/destroy_admin',deleteImage)

module.exports = router