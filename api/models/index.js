const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo');
mongoose.set('debug', true);
mongoose.Promise = Promise;

module.exports.Todo = require('./Todo');
