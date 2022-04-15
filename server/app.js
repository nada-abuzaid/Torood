const express = require('express');
const { join } = require('path');
const router = require('./router/route');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, '..', 'client')));

app.set('port', process.env.PORT || 9000);

app.use(router);

module.exports = app;
