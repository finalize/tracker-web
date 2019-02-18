var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const expressGraphQL = require('express-graphql');
var { buildSchema } = require('graphql');
var mongoose = require('mongoose');

const schema = require('./schema/schema');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/graphql', expressGraphQL({
  schema: schema,
  graphiql: true
}));

module.exports = app;
