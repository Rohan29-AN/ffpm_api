const swaggerJSDoc = require("swagger-jsdoc")

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Fihirana API',
            version: '1.0.0',
            description: 'Documentation that explains how to use fihirana API'
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Local server'
            }
        ]
    },
    apis:['./routes/*.js']
}

const swaggerSpec = swaggerJSDoc(swaggerOptions)

module.exports = swaggerSpec