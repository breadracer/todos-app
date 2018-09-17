const db = require('../models');

exports.getTodos = (req, res) => {
  db.Todo.find({})
    .then(todos => {
      res.json(todos);
    })
    .catch(err => {
      res.send(err);
    });
};

exports.createTodo = (req, res) => {
  db.Todo.create({...req.body})
    .then(todo => {
      console.log(req.body)
      res.json(todo);
    })
    .catch(err => {
      res.send(err);
    });
};

exports.getTodo = (req, res) => {
  db.Todo.findById(req.params.id)
    .then(todo => {
      res.json(todo);
    })
    .catch(err => {
      res.send(err);
    });
};

exports.updateTodo = (req, res) => {
  db.Todo.findByIdAndUpdate(req.params.id, {...req.body}, {new: true})
    .then(todo => {
      res.json(todo);
    })
    .catch(err => {
      res.send(err);
    });
};

exports.removeTodo = (req, res) => {
  db.Todo.findByIdAndRemove(req.params.id)
    .then(todo => {
      res.json({message: "Successfully deleted!!!"});
    })
    .catch(err => {
      res.send(err);
    });
};

module.exports = exports;
