const express = require('express');
const { getLyrics } = require('../controllers/fihiranaController');
const router = express.Router()

router.get('/lyrics/:songId',getLyrics)

module.exports = router