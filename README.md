# Random Words API

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

![build-test](https://github.com/mcnaveen/Random-Words-API/workflows/build-test/badge.svg)

🦄 Get Random Words (with pronunciation) for Free using this API

## 🌍 Languages

- English
- Dutch
- Spanish
- French
- Chinese
- Japanese

## 🚀 API

- English Random Words - `https://random-words-api.vercel.app/word`
- Dutch Random Words - `https://random-words-api.vercel.app/word/dutch`
- Spanish Random Words - `https://random-words-api.vercel.app/word/spanish`
- French Random Words - `https://random-words-api.vercel.app/word/french`
- Chinese Random Words - `https://random-words-api.vercel.app/word/chinese`
- Japanese Random Words - `https://random-words-api.vercel.app/word/japanese`
- Turkish Random Words - `https://random-words-api.vercel.app/word/turkish`

- PWA Demo - [Check Here](https://words.sanweb.info/)

## 🎛 Route Options (English Only)
- Base URL: `https://random-words-api.vercel.app/word/english`
```text
- /noun
- /sentence
- /question
- /adjective
- /idiom
- /verb
- /letter
- /paragraph
- /vocabulary
- /1-word-quotes
- /2-word-quotes
- /3-word-quotes
- /affirmation
```

## 🌐 Sample API Response

- API: `https://random-words-api.vercel.app/word/`
- Method: `GET`

```json
[
  {
    "word": "Exactor",
    "definition": "One who exacts; extortioner; claimer of rights  ",
    "pronunciation": "Eksaktor"
  }
]
```

## 🌐 Sample Dutch Response

- API: `https://random-words-api.vercel.app/word/dutch`
- Method: `GET`

```json
[
  {
    "word": "Perfect",
    "definition": "Perfect",
    "pronunciation": "Perfekt"
  }
]
```

- Check [api.rest](/test/api.rest) file for more details

## 💡 Learn New word

- [Join Telegram Channel](https://t.me/learnwordoftheday)
- [Learn Online](https://words.sanweb.info/)

## ✨ Installation (Development)

```sh
# Clone the Repo
git clone https://github.com/mcnaveen/random-words-api random-words-api

# Cd into Directory
cd random-words

# Install Dependencies
npm install

# Start the Development Server
npm run dev
```

## 🔀 Deploying to Heroku

OneClick Deploy on Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/mcnaveen/Random-Words-API)

## 🔀 Deploying to Vercel

OneClick Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fmcnaveen%2FRandom-Words-API.git)

OR

```html
- Fork the Repo - Login to Vercel (https://vercel.com/dashboard) - Click Import
Project - Give Forked Repo URL - Go Live
```

## 🔐 Rate Limit

- To configure the rate limit, edit the `utils/index.js` file
- Look for `limiter` variable
- `max` is the maximum number of requests allowed in a given time window
- `windowMs` is the time window in milliseconds
- `message` is the message to be returned when the rate limit is exceeded

## 😇 Add New Language
- Create a new folder in `data` with the full language name `ex: english`
- Add the words in the `words.json` file
- It should be an array of objects with `id`, `word`, and `definition` properties
- The `id` should be a unique number for each word
- The `word` should be the word in the language
- The `definition` should be the definition of the word in English
- The `pronunciation` should be the pronunciation of the word in the language (Optional)

## :question: How to Contribute?

Make your changes and follow the below instructions. We follow conventional commits.

### ✍️ Commit

- Stage all changes

```sh
git add .
```

- Commit the changes

```sh
yarn commit
```

- Push the changes to GitHub

```sh
git push <TO YOUR FORK>
```

## ⚛ USED BY

|      Project Name       |                        Demo/Preview                        |                        Source Code                        | Author                                   |
| :---------------------: | :--------------------------------------------------------: | :-------------------------------------------------------: | ---------------------------------------- |
|    Vue Random Words     |             [Demo](https://words.sanweb.info/)             |   [Source](https://github.com/mskian/vue-random-words)    | [@mskian](https://github.com/mskian)     |
|    Speak & Spell Elm    |        [Demo](https://speak-and-spell.vercel.app/)         |  [Source](https://github.com/gacallea/elm_speakandspell)  | [@gacallea](https://github.com/gacallea) |
|    Random Words CLI     | [Showcase](https://www.npmjs.com/package/random-words-cli) |  [Source](https://github.com/mcnaveen/random-words-cli)   | [@mcnaveen](https://github.com/mcnaveen) |
| Random Words CLI (Deno) | [Showcase](https://deno.land/x/randomwords) | [Source](https://github.com/mskian/deno-random-words-cli) | [@mskian](https://github.com/mskian) |

## ☑ License

- MIT

## ⚠ Disclaimer

We don't own any data or word. All belongs to the owner of Website. Use it for educational purpose only.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/mcnaveen"><img src="https://avatars.githubusercontent.com/u/8493007?v=4?s=100" width="100px;" alt=""/><br /><sub><b>MC Naveen</b></sub></a><br /><a href="https://github.com/mcnaveen/Random-Words-API/issues?q=author%3Amcnaveen" title="Bug reports">🐛</a> <a href="https://github.com/mcnaveen/Random-Words-API/commits?author=mcnaveen" title="Code">💻</a> <a href="#data-mcnaveen" title="Data">🔣</a> <a href="https://github.com/mcnaveen/Random-Words-API/commits?author=mcnaveen" title="Documentation">📖</a> <a href="#example-mcnaveen" title="Examples">💡</a> <a href="#ideas-mcnaveen" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-mcnaveen" title="Maintenance">🚧</a> <a href="https://github.com/mcnaveen/Random-Words-API/pulls?q=is%3Apr+reviewed-by%3Amcnaveen" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/jonah-butler"><img src="https://avatars.githubusercontent.com/u/18040568?v=4?s=100" width="100px;" alt=""/><br /><sub><b>jonah-butler</b></sub></a><br /><a href="https://github.com/mcnaveen/Random-Words-API/commits?author=jonah-butler" title="Code">💻</a> <a href="https://github.com/mcnaveen/Random-Words-API/commits?author=jonah-butler" title="Documentation">📖</a></td>
    <td align="center"><a href="https://santhoshveer.com/"><img src="https://avatars.githubusercontent.com/u/10300271?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Santhosh Veer</b></sub></a><br /><a href="https://github.com/mcnaveen/Random-Words-API/commits?author=mskian" title="Code">💻</a> <a href="https://github.com/mcnaveen/Random-Words-API/commits?author=mskian" title="Documentation">📖</a> <a href="#ideas-mskian" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-mskian" title="Maintenance">🚧</a> <a href="https://github.com/mcnaveen/Random-Words-API/issues?q=author%3Amskian" title="Bug reports">🐛</a> <a href="https://github.com/mcnaveen/Random-Words-API/pulls?q=is%3Apr+reviewed-by%3Amskian" title="Reviewed Pull Requests">👀</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
