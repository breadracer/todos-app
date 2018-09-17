const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.listen(3000, (req, res) => {
  console.log('Server started on port 3000');
})
