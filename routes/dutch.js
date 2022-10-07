import express from "express";
const router = express.Router();
import { pronounce } from "node-pronounce";
import { readFileSync } from "fs";
import { randomArrayItem } from "random-array-item";
import { setDefaultHeaders } from "../utils/headers.js";
var dutchRandomWord = [];
const dutchWordsData  = JSON.parse(readFileSync(new URL("../data/dutch/words.json", import.meta.url)));

router.get("/", function (req, res) {
  setDefaultHeaders(res);
  
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

export default router;
