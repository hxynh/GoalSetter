const express = require('express')
const router = express.Router()
const {getVideos} = require('../controllers/videosController')

router.get('/', getVideos)

module.exports = router