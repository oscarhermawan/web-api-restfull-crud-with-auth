
const express = require('express');
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const Strategy = require('passport-local').Strategy
const api = require('./controllers/userController')

var bodyParser = require('body-parser')
var users = require('./routes/users');
var memos = require('./routes/memos');

// app.use(cors())
mongoose.connect('mongodb://localhost/memo_oscar', (err)=>{
  if(err){
    console.log(err);
  } else {
    console.log('Connection Success');
  }
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

passport.use(new Strategy(api.signIn))
app.use(passport.initialize())

app.use('/users', users);
app.use('/memos', memos);

app.listen(3000)
module.exports = app;
