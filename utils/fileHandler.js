const fs = require('fs')
const path = require('path')
const filePath = '../data/'


module.exports = {
    /**
     * This function is used to retrieve the data source according to the chosen song type
     * @param {*} fileName Name of the file to be recovered (e.g , ffpm,ff or antema)
     * @returns JSON containing lyrics
     */
    async readFileLyrics(fileName) {
        const path = `${filePath}${fileName}`
        const data = await new Promise((resolve, reject) => {
            fs.readFile(path, 'utf-8', async (err, data) => {
                if (err) {
                    reject(data)
                } else {
                    resolve(data)
                }
            })
        });
        return data
    }



}