const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// APIS
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/bookshop');

const Books = require('./models/books');

// Post Books
app.post('/books', function (req, res) {
    const book = req.body;
    Books.create(book, function (err, books) {
        if(err){
          throw err;
        }
        res.json(books);
    })
});

// Get Books
app.get('/books', function (req, res) {
    Books.find(function (err, books) {
        if(err){
          throw err;
        }
        res.json(books);
    })
});

// Delete Books
app.delete('/books/:_id', function (req, res) {
    const query = {_id:req.params._id};

    Books.remove(query, function (err, books) {
        if(err){
          throw err;
        }
        res.json(books);
    })
});

// Update Books
app.put('/books/:_id', function (req, res) {
    const book = req.body;
    const query = req.params._id;
    const update = {
      '$set':{
          title:book.title,
          description:book.description,
          image:book.image,
          price:book.price
      }
    };
    // when true, return the updated document
    const options = {new: true};

    Books.findOneAndUpdate(query, update, options, function (err, books) {
        if(err){
          throw err;
        }
        res.json(books);
    })
});

app.listen(3001, function (err) {
    if(err){
        return console.log(err);
    }
    console.log('API Server is listening on 3001');
});
