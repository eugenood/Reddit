const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const rantStore = require('./rant-store');

const app = express();
const port = process.env.API_PORT || 3001;

rantStore.addRant('this is great', 'nexolute');
rantStore.addRant('this is not so great', 'jackmoo1');
rantStore.addRant('hello my world', 'worldlover');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/all', function(req, res) {
  res.json(rantStore.getRants());
});

app.get('/latest', function(req, res) {
  res.json(rantStore.getLatestRants(3));
})

app.post('/compose', function(req, res) {
  const { message, user } = req.body;
  const newRant = rantStore.addRant(message, user);
  res.send(newRant);
});

app.post('/upvote', function(req, res) {
  const { id } = req.body;
  rantStore.upvoteRant(id);
  res.send('done');
});

app.post('/downvote', function(req, res) {
  const { id } = req.body;
  rantStore.downvoteRant(id);
  res.send('done');
});

app.listen(port, function() {
 console.log(`API running on port ${port}`);
});