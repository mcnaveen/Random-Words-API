import express from "express";
const app = express();

import home from './routes/home.js';
import en from './routes/en.js';
import dutch from './routes/dutch.js';

app.use('/', home);
app.use('/word/dutch', dutch);
app.use('/word', en);

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log('listening on port ' + port);
});