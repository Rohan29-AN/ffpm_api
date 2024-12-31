const { SONG_TYPE } = require("./enums")

module.exports = {
    /**
     * Function to check if the songType is valid
     * @param {*} songType The type of song  to recover
     * @returns true if the songType is valid and false otherwise
     */
    isValidSongType(songType) {
        return Object.values(SONG_TYPE).includes(songType   )
    }
}