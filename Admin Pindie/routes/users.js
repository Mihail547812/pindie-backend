const usersRouter = require('express').Router();

const findAllUsers = require('../middlewares/users');
const sendAllUsers = require('../controllers/users');
const createUser = require('../middlewares/users')

usersRouter.get('/users', findAllUsers, sendAllUsers);
usersRouter.post(
    "/users",
    findAllUsers,
    createUser,
    sendUserCreated
);

module.exports = usersRouter;