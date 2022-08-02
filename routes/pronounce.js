import express from "express";
import { pronounce } from "node-pronounce";
const router = express.Router();

router.get("/:word", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');
  res.header("Access-Control-Allow-Methods", "GET");
  res.header("X-Frame-Options", "DENY");
  res.header("X-XSS-Protection", "1; mode=block");
  res.header("X-Content-Type-Options", "nosniff");
  res.header("Strict-Transport-Security", "max-age=63072000");
  res.setHeader("Content-Type", "application/json");

    var userword = encodeURIComponent(req.params.word) || "Automation";
    let wordData = pronounce(userword);
    var pronouncedWord = decodeURIComponent(wordData);
    res.status(200).json(pronouncedWord);

});

export default router;