'use strict';
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { router } = require('./server/routes');
const database = require('./server/helpers/database');
const swaggerUi = require('swagger-ui-express'),
  swaggerDocument = require('./swagger.json');

const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
// app.use(formidableMiddleware());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  return res.status(200).json({ message: 'handshake succefully done' });
});

app.use('/api/v1', router);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

try {
  database.sequelize.authenticate();
  database.sequelize.sync();
  console.info('Connection has been established successfully');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

app.listen(port);
