const { PAGE_MAX } = require("../config/const")
const { retrieveLyrics } = require("../services/lyrics")
const { isValidSongType } = require("../utils/helper")

module.exports = {
    async getLyrics(req, res) {
        try {
            if (!req.params.songId) {
                return res.status(400).json({ error: "Missing songId", message: "The 'songId' parameter is required to retrieve lyrics" })
            }

            if (!req.query.songType) {
                return res.status(400).json({ error: "Missing songType", message: "The 'songType' parameter is required to retrieve lyrics" })
            }

            if (!isValidSongType(req.query.songType)) {
                return res.status(400).json({ error: "Invalid songType", message: `'${songType}' is not a valid song type. Valid types are: ffpm, ff, antema.` })
            }

            //check if the songID is not between 1 and the max value
            console.log('max:',PAGE_MAX[req.query.songType])
            if (Number(req.params.songId) < 1 || Number(req.params.songId) > PAGE_MAX[req.query.songType]) {
                return res.status(400).json({ error: "Song not found", message: ` "The song with ID ${req.params.songId} does not exist.` })

            }

            //Check if the 'verses' parameter is provided and it follows the predefined rule
            const versesRegex = /^\d+(,\d+)*$/
            let verses
            if (req.query.verses && !versesRegex.test(req.query.verses)) {
                return res.status(400).json({ error: "Invalid verses format", message: 'The "verses" parameter must be a comma-separated list of numbers, e.g., "1,3"' })
            }
            else if (req.query.verses && versesRegex.test(req.query.verses)) {
                verses = req.query.verses.split(',')
            }
            else {
                //This [] value means that all verses will be retrieved
                verses = []
            }

            const lyrics = await retrieveLyrics(Number(req.params.songId))

            let response = {
                "songId": req.params.songId,
                "songType": req.query.songType,
                "requestedVerses": [],
                "verses": []
            }
            if (verses.length > 0) {
                response.requestedVerses = verses
                for (let i = 0; i < verses.length; i++) {
                    response.verses.push(lyrics[(Number(verses[i]) - 1)])
                }
            }
            else {
                response.verses = lyrics
            }

            return res.status(200).json(response)
        }
        catch (error) {
            console.log("Error message : ", error.message)
            res.status(500).json({
                error: 'Internal Server Error',
                message: 'Something went wrong. Please try again later.'
            });
        }
    }
}