const express = require('express');
const cheerio = require('cheerio');
const nlp = require('compromise');
const nlpPronounce = require('compromise-pronounce');
nlp.extend(nlpPronounce);
const randomUseragent = require('random-useragent');
const axios = require('axios');
const rua = randomUseragent.getRandom();
const app = express();
var wordOfDay = [];

app.get('/', function(req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('X-Frame-Options', 'DENY');
    res.header('X-XSS-Protection', '1; mode=block');
    res.header('X-Content-Type-Options', 'nosniff');
    res.header('Strict-Transport-Security', 'max-age=63072000');
    app.disable('x-powered-by');

    res.json('Random Words API');

});

app.get('/word', function(req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('X-Frame-Options', 'DENY');
    res.header('X-XSS-Protection', '1; mode=block');
    res.header('X-Content-Type-Options', 'nosniff');
    res.header('Strict-Transport-Security', 'max-age=63072000');
    res.setHeader('Content-Type', 'application/json');
    app.disable('x-powered-by');

    axios({
        method: 'GET',
        url: 'https://randomword.com/',
        headers: {
            'User-Agent': rua
        }
    }).then(function(response) {

        $ = cheerio.load(response.data);

        if (wordOfDay.length > 0) {
            wordOfDay = [];
        }

        var post = $('.section #shared_section');
        var word = post.find('#random_word').eq(0).text().replace('\r\n\t\t\t\t\t', '').replace('\r\n\t\t\t\t', '').replace('\n\t\t\t\t\t', '').replace('\n\t\t\t\t', '');
        var definition = post.find('#random_word_definition').eq(0).text().replace('\n', '');
        var pronounceword = word;
        var doc = nlp(pronounceword);
        var pronounces = doc.terms().pronounce().map(o => o.pronounce).toString();
        var pronounce = pronounces.replace(",", "");
        wordOfDay.push({
            word: decodeURI(word.charAt(0).toUpperCase() + word.slice(1)),
            definition: decodeURI(definition.charAt(0).toUpperCase() + definition.slice(1)),
            pronunciation: decodeURI(pronounce.charAt(0).toUpperCase() + pronounce.slice(1))
        })
        console.log("User-Agent:", rua);
        res.send(JSON.stringify(wordOfDay, null, 2));
        console.log(wordOfDay);

    }).catch(function(error) {
        if (!error.response) {
            console.log('API URL is Missing');
            res.json('API URL is Missing');
        } else {
            console.log('Something Went Wrong - Enter the Correct API URL');
            res.json('Something Went Wrong - Enter the Correct API URL');
        }
    });

});

app.use('/', function(req, res) {
    res.status(404).json({
        error: 1,
        message: 'Not Found'
    });
});

// start app on localhost port 3000
var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log('listening on port ' + port);
});