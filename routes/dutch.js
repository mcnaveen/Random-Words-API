const express = require("express");
const router = express.Router();
const { pronounce } = require("node-pronounce");
const dutchWordsData = require("../data/dutch/words.json"); //Import Dutchs
const { randomArrayItem } = require("../utils/randomArrayItem");
var dutchRandomWord = [];

router.get("/", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With"
  );
  res.header("Access-Control-Allow-Methods", "GET");
  res.header("X-Frame-Options", "DENY");
  res.header("X-XSS-Protection", "1; mode=block");
  res.header("X-Content-Type-Options", "nosniff");
  res.header("Strict-Transport-Security", "max-age=63072000");
  res.setHeader("Content-Type", "application/json");
  
  if (dutchRandomWord.length > 0) {
    dutchRandomWord = [];
  }

  const fetchRandomWord = randomArrayItem(dutchWordsData);

  const word = fetchRandomWord.word;
  const definition = fetchRandomWord.definition;
  const pronunciation = pronounce(word);

  dutchRandomWord.push({
    word: decodeURI(word.charAt(0).toUpperCase() + word.slice(1)),
    definition: decodeURI(
      definition.charAt(0).toUpperCase() + definition.slice(1)
    ),
    pronunciation: decodeURI(
      pronunciation.charAt(0).toUpperCase() + pronunciation.slice(1)
    ),
  });
  res.send(JSON.stringify(dutchRandomWord, null, 2));
});

module.exports = router;
