import express from "express";
const app = express();

import english from './routes/english.js';
import language from './routes/language.js';
import swaggerUi from './swagger-ui.js';
import { limiter } from "./utils/index.js";

// Apply rate limiter to all routes except root
app.use((req, res, next) => {
  if (req.path !== '/') {
    return limiter(req, res, next);
  }
  next();
});

app.use('/', swaggerUi);
app.use('/word', english);
app.use('/word', language);
app.use('/api-docs', swaggerUi);

app.use('/', function(_req, res) {
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

const port = process.env.PORT || 3002;
app.listen(port, function() {
    console.log('listening on port ' + port);
});