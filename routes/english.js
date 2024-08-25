import express from "express";
import { defaultHeaders } from "../utils/index.js";
import { fetcher } from "../utils/index.js";

const router = express.Router();
const baseUrl = "https://randomword.com";

const validPos = ['noun', 'verb', 'adjective', 'adverb', 'sentence', 'question', 'idiom', 'letter', 'paragraph', 'vocabulary', '1-word-quotes', '2-word-quotes', '3-word-quotes', 'affirmation'];

router.get("/", async (req, res) => {
  defaultHeaders(res);
  try {
    const word = await fetcher({
      url: baseUrl,
      container: ".section",
      containerId: "#shared_section",
      wordId: "#random_word",
      definitionId: "#random_word_definition",
    });
    res.json(word);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
});

router.get("/english/:pos", async (req, res, next) => {
  const partOfSpeech = req.params.pos.toLowerCase();
  
  if (!validPos.includes(partOfSpeech)) {
    return next();
  }

  defaultHeaders(res);
  try {
    const word = await fetcher({
      url: `${baseUrl}/${partOfSpeech}`,
      container: ".section",
      containerId: "#shared_section",
      wordId: "#random_word",
      definitionId: "#random_word_definition",
    });
    res.json(word);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
});

export default router;