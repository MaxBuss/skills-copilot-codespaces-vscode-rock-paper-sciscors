// Create web server
// create a route that accepts a POST request to /comments
// create a middleware that will parse the incoming request body
// create a middleware that will log the incoming request body
// create a middleware that will send a response to the client
// start the server on port 3000

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/comments', (req, res) => {
  console.log(req.body);
  res.send('POST request sent to /comments');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});