const express = require('express');
const { getLyrics } = require('../controllers/fihiranaController');
const router = express.Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     Verse:
 *       type:  object
 *       properties:
 *         andininy:
 *           type:  integer
 *           description:  The verse ID
 *         tononkira:
 *           type:  string
 *           description:  The verse
 *         fiverenany:
 *           type:  boolean
 *           description:  Variable to indicate whether it is the chorus or not
 *        
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Verse:
 *       type:  object
 *       properties:
 *         andininy:
 *           type:  integer
 *           description:  The verse ID
 *         tononkira:
 *           type:  string
 *           description:  The verse
 *         fiverenany:
 *           type:  boolean
 *           description:  Variable to indicate whether it is the chorus or not
 *        
 */

router.get('/lyrics/:songId',getLyrics)

module.exports = router