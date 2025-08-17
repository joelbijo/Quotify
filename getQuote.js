const fs = require("fs/promises");
async function getQuote() {
  const quotesFile = JSON.parse(await fs.readFile("./quotes.json", "utf8"));
  //console.log(quotesFile); gives all quote nd author info
  const quotes = quotesFile.map((quote) => {
    return {
      quoteText: quote.quoteText, //takes the quote text from quote.json file
    };
  });
  //console.log(quotes);
  //console.log(quotes.length);
  //console.log(quotes[Math.floor(Math.random() * quotes.length)]); //random: from 0 to <1*length of quotes -> so that 1 can change to any n number which denotes, the number of items in quotes file. math.floor makes sure that the multiplied values  is rounded down to nearest integer
  return quotes[Math.floor(Math.random() * quotes.length)].quoteText;
}
module.exports = getQuote;
//main();
