const express = require("express");
const cookieParser = require("cookie-parser");
const bodyparser = require("body-parser");

const app = express();

app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cookieParser());

const auth = require("./route/auth");
const blog = require("./route/blog");

app.use(`/api`, auth);
app.use(`/api`, blog);

module.exports = app;
