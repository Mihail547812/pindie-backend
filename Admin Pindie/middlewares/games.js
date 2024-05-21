const games = require("../models/game");

const findAllGames = async (req, res, next) => {
  req.gamesArray = await games.find({}).populate("categories").populate("users");
  next();
};

const findGameById = async (req, res, next) => {
  try {
      req.game = await games.findById(req.params.id);
  next();
  } catch (error) {
      res.setHeader("Content-Type", "application/json");
      res.status(404).send(JSON.stringify({ message: "Игра не найдена" }));
  }
};

module.exports = {findAllGames, findGameById}