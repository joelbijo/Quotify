//Import getQuote function
const getQuote = require("./getQuote");

//Import express and other modules
const express = require("express");
const Sentiment = require("sentiment");
const fs = require("fs/promises");

const app = express();
const port = 3000;

const sentiment = new Sentiment(); //Initialize sentiment analysis

//Middleware to parse JSON
app.use(express.json());

//API routes here
//GET route to send a random quote
app.get("/api/quote", async (req, res) => {
  const randomQuote = await getQuote(); //Get random quote asynchronously
  console.log(randomQuote);
  res.json({ quote: randomQuote }); //Send quote as JSON response
});

//Sentiment analysis POST route
app.post("/api/sentiment", async (req, res) => {
  const { quote } = req.body; //Get quote from request body
  if (!quote) return res.status(400).json({ error: "No quote provided" });

  const result = sentiment.analyze(quote);

  let sentimentLabel = "Neutral";
  if (result.score > 0) sentimentLabel = "Positive";
  else if (result.score < 0) sentimentLabel = "Negative";

  //Send sentiment result as JSON response
  res.json({
    sentiment: sentimentLabel,
    score: result.score,
    comparative: result.comparative,
  });
});

//Normal routes here
//Serve main index.html page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

//Serve static files from public folder
app.use(express.static(__dirname + "/public"));

//Start server
app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`);
});

/*
async function main() {
  const quote = await getQuote();
  console.log(quote);
}
main();
*/
