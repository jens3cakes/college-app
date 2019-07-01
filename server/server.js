require('dotenv').config();
const http = require('http');

const express = require('express');
const app = express();
const PORT = process.env.EXPRESS_HOST_PORT || 8989;
const path = require('path')

const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const redis = require('connect-redis');

app.use(express.static(path.join(__dirname + "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('smoke', (req,res)=> {
  res.send('Fire Fire')
});

const server = http.createServer(app);

app.listen(PORT, () =>{
  console.log(`Server listening on ${PORT}`)
});