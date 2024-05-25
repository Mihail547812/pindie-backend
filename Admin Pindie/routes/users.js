const usersRouter = require('express').Router();

const { findAllUsers } = require('../middlewares/users');
const { sendAllUsers } = require('../controllers/users');
const { createUser } = require('../middlewares/users')
const { findUserById } = require('../middlewares/users');
const { sendUserById } = require('../controllers/users');
const { updateUser } = require('../middlewares/users')
const { sendUserUpdated } = require('../controllers/users')
const { sendUserCreated } = require('../controllers/users')
const { deleteUser } = require('../middlewares/users')
const { sendUserDeleted } = require('../controllers/users')
const { checkEmptyNameAndEmailAndPassword } = require('../middlewares/users')
const { checkEmptyNameAndEmail } = require('../middlewares/users')
const { checkIsUserExists } = require('../middlewares/users')
const { filterPassword } = require('../middlewares/users')
const { hashPassword } = require('../middlewares/users')
const { checkAuth } = require('../middlewares/auth')


usersRouter.get('/users', findAllUsers, sendAllUsers);
usersRouter.post(
    "/users",
    findAllUsers,
    createUser,
    sendUserCreated
);
usersRouter.get('/users/:id', findUserById, sendUserById);

usersRouter.post(
    "/users",
    findAllUsers,
    checkIsUserExists,
    checkEmptyNameAndEmailAndPassword,
    checkAuth,
    hashPassword,
    createUser,
    sendUserCreated
);
usersRouter.put(
    "/users/:id",
    checkEmptyNameAndEmail,
    checkAuth,
    updateUser,
    sendUserUpdated
);
usersRouter.delete(
    "/users/:id",
    checkAuth,
    deleteUser,
    sendUserDeleted
);

usersRouter.get("/users", findAllUsers, filterPassword, sendAllUsers);
usersRouter.get("/users/:id", findUserById, filterPassword, sendUserById);
usersRouter.get("/me", checkAuth, sendMe);


module.exports = { usersRouter }