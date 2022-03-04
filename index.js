const express = require('express');
const app = express();

// Importing the routes
const home = require('./routes/home');
const en = require('./routes/en');
const dutch = require('./routes/dutch');

app.use('/', home);
app.use('/word', en);
app.use('/word/dutch', dutch);

// start app on localhost port 3000
var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log('listening on port ' + port);
});