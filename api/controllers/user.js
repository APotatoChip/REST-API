const userModel = require('../../models/user');

// Controller for handling requests

module.exports.createUser = function(req, res, next) {
    const { email, password } = req.body;
    userModel.create({ email, password })
        .then(user => {
            res.status(201).send(user);
        })
        .catch(next);
}

module.exports.getUsers = function(req, res, next) {
    userModel.find({})
        .then(users => {
            res.send(user);
        })
        .catch(next);
}

module.exports.getUser = function(req, res, next) {
    const id = req.params.id;
    userModel.findById(id)
        .then(user => {
            res.send(user);
        })
        .catch(next);
}