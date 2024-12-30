const express = require('express');
const routes = require('./routes');
const { logger } = require('./middlewares/logger');
require('dotenv').config();
const PORT = process.env.PORT
const swaggerUi = require("swagger-ui-express")
const swaggerSpec = require('./config/swaggerConfig')
const app = express();

// Middleware
app.use(express.json());
app.use(logger)

// Routes
app.use('/', routes);

//Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))


app.listen(PORT, () => {
    console.log("Server is running on PORT ", PORT)
})

module.exports = app;