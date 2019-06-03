const express = require('express');
const app = express();
const bodyParser = require('body-parser')
app.use(express.static('01sources'));

app.use(bodyParser.json());

const router = require('./routes');

router(app)


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

