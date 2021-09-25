const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const middlewareHandler = require("./middlewares/middlewareHandler");
const routes = require('../src/routes/router')
const app = express();

//creating server and applying express 
app.use(morgan('dev'))
app.use(helmet())
app.use(express.json())
app.use(routes);
app.use(middlewareHandler)

module.exports = { app };
