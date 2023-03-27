import React from "react";
import "./App.css";
import Button from "./components/button/button";
import Card from "./components/card/card";
import Title from "./components/title/title";
import { fetchQuotes } from "./entities/quotes";

function App() {
  async function randomQuote() {
    const quotes = await fetchQuotes();
    console.log(quotes);
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    console.log(randomQuote);
    const quotebox = document.querySelector("#text");
    const authorbox = document.querySelector("#author");
  }

  async function handleClick() {
    randomQuote();
  }

  return (
    <div className="App">
      <Title>Random Quote Generator " -"</Title>
      <Card>
        <div id="quote-box">
          <div id="text">'QUOTE'</div>
          <div id="author">'AUTHOR'</div>
          <div id="buttons-wrapper">
            <a id="tweet-quote" href="">
              twister
            </a>
            <Button id="new-quote" onClick={handleClick}>
              New Quote
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default App;
