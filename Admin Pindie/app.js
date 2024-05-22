const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const apiRouter = require("express").Router();
const cookieParser = require("cookie-parser");

const connectToDatabase = require('./database/connect');
const cors = require('./middlewares/cors');

const app = express();
const PORT = 3001;

connectToDatabase();

app.use(
  cors,
  cookieParser(),
  bodyParser.json(),
  pagesRouter, // Добавляем роутер для страниц
  apiRouter,
  express.static(path.join(__dirname, "public"))
);

app.listen(PORT);