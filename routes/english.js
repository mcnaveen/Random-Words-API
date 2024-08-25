import express from "express";
import { defaultHeaders } from "../utils/index.js";
import { fetcher } from "../utils/index.js";

const router = express.Router();
const baseUrl = "https://randomword.com";

const validPos = ['noun', 'verb', 'adjective', 'adverb', 'sentence', 'question', 'idiom', 'letter', 'paragraph', 'vocabulary', '1-word-quotes', '2-word-quotes', '3-word-quotes', 'affirmation'];

/**
 * @swagger
 * /word:
 *   get:
 *     summary: Get a random English word
 *     description: Retrieve a random English word with its definition and pronunciation
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 word:
 *                   type: string
 *                 definition:
 *                   type: string
 *                 pronunciation:
 *                   type: string
 *       500:
 *         description: Server error
 */
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

/**
 * @swagger
 * /word/english/{pos}:
 *   get:
 *     summary: Get a random English word by part of speech
 *     description: Retrieve a random English word with its definition and pronunciation for a specific part of speech
 *     parameters:
 *       - in: path
 *         name: pos
 *         required: true
 *         schema:
 *           type: string
 *         description: Part of speech (noun, verb, adjective, etc.)
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 word:
 *                   type: string
 *                 definition:
 *                   type: string
 *                 pronunciation:
 *                   type: string
 *       500:
 *         description: Server error
 */
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