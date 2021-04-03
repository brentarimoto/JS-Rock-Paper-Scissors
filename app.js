/********** REQUIRES *************/
const express = require('express')
const morgan = require('morgan')
const routes = require('./routes.js')
const path = require('path')

/********** APP SETUP *************/
const app = express()

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'pug')


/********** MIDDLEWARE *************/


/********** ROUTES *************/
app.use(routes)

/********** EXPORTS *************/
module.exports = app