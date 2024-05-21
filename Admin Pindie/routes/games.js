// Файл routes/games.js

const gamesRouter = require('express').Router();

const findAllGames = require('../middlewares/games');
const sendAllGames = require('../controllers/games');
const createGame = require('../middlewares/games')

gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRouter.post("/games", findAllGames, createGame, sendGameCreated);

module.exports = gamesRouter;