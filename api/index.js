const { Router } = require('express');

module.exports.connect = function(path, app) {
    const router = Router();

    router.get('/users', function(req, res) {
        res.send("SOME USERS!");
    });

    // Connect api with our app
    app.use(path, router);
}