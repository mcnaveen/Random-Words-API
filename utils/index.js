import axios from "axios";
import * as cheerio from "cheerio";
import rateLimit from "express-rate-limit";
import { pronounce } from "node-pronounce";
import randomUseragent from "random-useragent";

const rua = randomUseragent.getRandom();

export const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 30, // Limit each IP to 100 requests per windowMs
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  message: {
    error: 1,
    message: 'Too many requests, please try again later.'
  }
});

export const fetcher = async ({
  url,
  container = ".section",
  containerId = "#shared_section",
  wordId = "#random_word",
  definitionId = "#random_word_definition"
}) => {
  try {
    const response = await axios({
      method: "GET",
      url,
      headers: { "User-Agent": rua },
    });

    const $ = cheerio.load(response.data);
    const post = $(`${container} ${containerId}`);
    const word = post.find(wordId).eq(0).text().replace(/[\r\n\t]+/g, "");
    const definition = post.find(definitionId).eq(0).text().replace("\n", "");
    const pronounceword = pronounce(word).replace(",", "");

    return {
      word: decodeURI(`${word.charAt(0).toUpperCase()}${word.slice(1)}`),
      definition: decodeURI(`${definition.charAt(0).toUpperCase()}${definition.slice(1)}`),
      pronunciation: decodeURI(`${pronounceword.charAt(0).toUpperCase()}${pronounceword.slice(1)}`),
    };
  } catch (error) {
    if (!error.response) {
      throw new Error("API URL is Missing");
    }
    throw new Error("Something Went Wrong - Enter the Correct API URL");
  }
}

export const defaultHeaders = (response) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');
  response.header("Access-Control-Allow-Methods", "GET");
  response.header("X-Frame-Options", "DENY");
  response.header("X-XSS-Protection", "1; mode=block");
  response.header("X-Content-Type-Options", "nosniff");
  response.header("Strict-Transport-Security", "max-age=63072000");
  response.setHeader("Content-Type", "application/json");
}
