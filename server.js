var express = require('express');
var cheerio = require('cheerio');
var request = require('request');
var app = express();
var wordOfDay = [];

// start the server listening for requests
//app.set('port', process.env.PORT || 3000, 
//	() => console.log("Server is running..."));

app.get('/', function (req, res) {
  // allow access from other domains
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  
  // use Cheerio to make request
  request({
    method: 'GET',
    url: 'https://randomword.com/'
    },
    headers: {
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36' // optional headers
     }, function(err, response, body, callback) {
      if (err) return console.error(err);
      
      // get the HTML body from WordThink.com
      $ = cheerio.load(body);

      if(wordOfDay.length > 0){
        wordOfDay = [];
      }

      var post = $('.section #shared_section');
      var word = post.find('#random_word').eq(0).text().replace('\r\n\t\t\t\t\t', '').replace('\r\n\t\t\t\t', '').replace('\n\t\t\t\t\t','').replace('\n\t\t\t\t','');
      var definition = post.find('#random_word_definition').eq(0).text().replace('\n', '');
      
      // create an object
      wordOfDay.push({word: word.charAt(0).toUpperCase() + word.slice(1), definition: definition.charAt(0).toUpperCase() + definition.slice(1)})

  });
  
  // return a JSON object as a response
  res.send(JSON.stringify(wordOfDay, null, 4));
});

// start app on localhost port 3000
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('listening on port ' + port);
});
