import express from "express";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { randomArrayItem } from "random-array-item";
import { defaultHeaders } from "../utils/index.js";

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get("/:language", async function (req, res) {
  defaultHeaders(res);
  const language = req.params.language.toLowerCase();
  const wordsFilePath = path.join(__dirname, "..", "data", language, "words.json");

  try {
    await fs.access(wordsFilePath);
    
    const fileContent = await fs.readFile(wordsFilePath, "utf-8");
    
    if (fileContent.trim()) {
      const words = JSON.parse(fileContent);
      const randomWord = randomArrayItem(words);
      res.status(200).json([randomWord]);
    } else {
      throw new Error("Empty file");
    }
  } catch (error) {
    if (error.code === "ENOENT" || error.message === "Empty file") {
      res.status(404).json({
        error: 1,
        message: "Language not supported yet"
      });
    } else {
      console.error("Error reading words file:", error);
      res.status(500).json({
        error: 1,
        message: "Internal server error"
      });
    }
  }
});

export default router;