import express from "express";
const app = express();

import home from './routes/home.js';
import en from './routes/en.js';
import dutch from './routes/dutch.js';
import pronounce from './routes/pronounce.js';

app.use('/', home);
app.use('/word/dutch', dutch);
app.use('/word', en);
app.use('/pronounce', pronounce);

app.use('/', function(req, res) {
    res.status(404).json({
        error: 1,
        message: 'Page or Data not Found'
    });
})

app.use((err, req, res, next) => {
    if (!err) return next();
    return res.status(403).json({
        error: 1,
        message: 'Page or Data not Found'
    });
});

const port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log('listening on port ' + port);
});
