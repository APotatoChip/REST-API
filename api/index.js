const { Router } = require('express');
const userController = require('./controllers/user');

module.exports.connect = function(path, app) {
    const router = Router();

    router.route('/user')
        .get(userController.getUsers)
        .post(userController.createUser)
    router.route('/user/:id')
        .get(userController.getUser)
        .put(userController.updateUser)
        .delete(userController.deleteUser)

    // Connect api with our app
    app.use(path, router);
}