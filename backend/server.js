'use strict';


require('dotenv').config();

const express = require('express');

const port = process.env.PORT || 3000;

const app = express();

app.get("",(req, res) => {
  
  res.send("hello world");
  next();

});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (app.get('env') === 'test') return;

app.listen(port);