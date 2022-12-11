var cowsay = require("cowsay");
const Quote = require("inspirational-quotes");

const quote = Quote.getRandomQuote(); // return any random quote


console.log(
  cowsay.say({
    text: quote,
    e: "oO",
    T: "U ",
  })
);
