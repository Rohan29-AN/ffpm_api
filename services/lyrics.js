const { SONG_TYPE } = require("../utils/enums")
const { readFileLyrics } = require("../utils/fileHandler")

module.exports = {
    /**
        * This function retrieves lyrics from a specified file and returns the lyrics of the song with the given ID.
        * @param {*} songType The type of the song to search for (e.g, ffpm ,Fihirana fanampiny, Antema)
        * @param {*} songId The id of the song to search for
        * @returns An object containing the requested song
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

            if (!jsonData[key]) {
                throw new Error(`Song ID "${songId}" not found in file "${fileName}"`)
            }

            const jsonData = JSON.parse(data)

            const result = jsonData[key].hira
            return result

        }
        catch (error) {
            console.log("An error has occured :", error)
            throw new Error("An error occurred in processing the song data: " + error.message)
        }


    }
}