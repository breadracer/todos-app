const express = require('express');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todos');

const app = express();
app.use(bodyParser.json());

app.use('/api/todos', todoRoutes);

app.listen(3000, (req, res) => {
  console.log('Server started on port 3000');
});
