const { SONG_TYPE } = require("../utils/enums")
const { readFileLyrics } = require("../utils/fileHandler")

module.exports = {
    /**
        * 
        * @param {*} songType The type of the song to search for (e.g, ffpm ,Fihirana fanampiny, Antema)
        * @param {*} songId The id of the song to search for
        */
    async retrieveLyrics(songType, songId) {
        try {
            let fileName = ''
            switch (songType) {
                case SONG_TYPE.FFPM:
                    fileName = `ffpm.json`
                    break
                case SONG_TYPE.FIHIRANA_FANAMPINY:
                    fileName = `ff.json`
                    break
                case SONG_TYPE.ANTEMA:
                    fileName = `antema.json`
                    break
                default:
                    throw new Error("Type not recognized")
            }
            //retrieve the source of lyrics according to the type of song
            const data = readFileLyrics(fileName)

            const key = `${fileName}_${songId}`

            const jsonData = JSON.parse(data)

            const result = jsonData[key].hira
        }
        catch (error) {
            console.log("An error has occured :", error)
        }


    }
}