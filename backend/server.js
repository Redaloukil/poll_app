'use strict';
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { router } = require('./server/routes');
const database = require('./server/helpers/database');
const passport = require('passport');
const logger = require('./server/utils/logger');

const port = process.env.PORT || 3000;

const app = express();

try {
  database.sequelize.authenticate();
  database.sequelize.sync();
  logger.info('Connection has been established successfully');
} catch (error) {
  logger.error('Unable to connect to the database:', error);
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());

app.get('/api/test', function(req, res) {
  return res.status(200).json({ message: 'handshake succefully done' });
});

app.use('/api/v1', router);

app.use('*', (req, res) => {
  return res.status(404).json({ message: 'Ressource not found' });
});

app.listen(port);
