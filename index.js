// Setting up a global variable that will always be equivalent to app's base dir
global.__basedir = __dirname;


// Importing modules
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const utils = require('./utils');
const { server: { port, cors: corsConfig }, database } = require('./config');
const db = require('./db');
const api = require('./api');
const tapLog = require('./utils/tap-log');
const globalErrorHandler = require('./global-error-handler');


// Creating Express Application
const app = express();

// For later testing with Angular
app.use(cors({
    origin: corsConfig.urls,
    credentials: corsConfig.credentials,
    exposedHeaders: corsConfig.exposedHeaders
}));

app.use(cookieParser());
// The data will be in json format
app.use(bodyParser.json());
// Configuring the static directory, resolving the path to absolute address
app.use(express.static(path.resolve(__basedir, 'static')));

api.connect('api/v1', app);

// Every request that doesn't match the above written will recieve the index.html page
app.use('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'static', 'index.html'));
});

app.use(globalErrorHandler);

function appListen() {
    return new Promise((resolve, reject) => {
        app.listen(port, function() {
            resolve();
        });
    });
}

db.connect(database.connectionString, database.databaseName)
    .catch(utils.tapLog('Error connecting to database!'))
    .then(utils.tapLog('Successfully connected to database!'))
    .then(appListen)
    .then(tapLog(`Server is listening on :${port}`))
    .catch(error => console.log(`Server error: ${error.message}`));