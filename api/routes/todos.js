const express = require('express');
const db = require('../models');
const helpers = require('../helpers/todos')
const router = express.Router();

router
  .route('/')
  .get(helpers.getTodos)
  .post(helpers.createTodo);

router
  .route('/:id')
  .get(helpers.getTodo)
  .put(helpers.updateTodo)
  .delete(helpers.removeTodo);

module.exports = router;
