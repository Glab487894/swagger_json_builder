const express = require('express');
require("dotenv").config();
const bodyParser = require("body-parser");
const swaggerUi = require ('swagger-ui-express');

//Create app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Create swagger
const swaggerDocument = require('./swagger1.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const newSwaggerDocument = require('./building-swagger.json');
app.use('/new-docs', swaggerUi.serve, swaggerUi.setup(newSwaggerDocument));

// Enable CORS
app.use(function(req, res, next) {
    // Websites allowed to connect
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // Request methods to be allowed
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    // Request headers to be allowed
    res.setHeader("Access-Control-Allow-Headers", "X-Access-Token,Content-Type");
    // Pass to next layer of middleware
    res.setHeader("Content-Type", "application/json");
    next();
});

app.use("/api", require("./routes"));



app.listen(process.env.PORT, function() {
    console.log(`Node server listening on port ${process.env.PORT}`);
});