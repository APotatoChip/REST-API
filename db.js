const mongoose = require("mongoose");

module.exports.connect = (connectionString, databaseName) => mongoose.connect(
    `${connectionString}/${databaseName}`, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }
);