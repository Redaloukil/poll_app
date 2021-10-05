"use strict";
require("dotenv").config();

const { Users, Votes, Choices } = require("./server/models");
const express = require("express");
const database = require("./server/helpers/database");

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

try {
  database.sequelize.authenticate();
  database.sequelize.sync();
  console.info("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

app.listen(port);
