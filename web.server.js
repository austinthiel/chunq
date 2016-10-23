/* jshint node: true */
'use strict';

let express = require("express");
let app = express();

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.listen(80, function() {
  console.log("Listening on port 80");
});
