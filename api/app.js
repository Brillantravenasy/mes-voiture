//application express
const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path');

const carRoutes = require('./src/routes/car');
const userRoutes = require('./src/routes/user');
const commentRoutes = require('./src/routes/comment');


const app = express();
app.use(bodyParser.json());
app.use('/images', express.static(path.join(__dirname, 'images')));

mongoose.connect('mongodb+srv://brillant:Brillant22101995!@cluster0.eq0tm.mongodb.net/mes_voitures?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });


app.use('/api/car', carRoutes);
app.use('/api/auth', userRoutes);
app.use('/api/comment', commentRoutes);

module.exports = app;