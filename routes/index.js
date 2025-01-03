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
 *     DetailedSongSchema:
 *       type:  object
 *       properties:
 *         songId:
 *           type:  integer
 *           description:  The id of the song you are looking for
 *         songType:
 *           type:  string
 *           description:  The type of song
 *         requestedVerses:
 *           type:  array
 *           items:  
 *             type:  integer
 *             description:  List of verse IDs
 *         verses:
 *           type:  array
 *           items:
 *             $ref:  '#/components/schemas/Verse'
 *             description:  List of verses requested
 *        
 */

router.get('/lyrics/:songId', getLyrics)

module.exports = router