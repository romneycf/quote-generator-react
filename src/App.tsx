import React, { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/button/button";
import Card from "./components/card/card";
import Title from "./components/title/title";
import { fetchQuotes } from "./entities/quotes";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    handleClick();
  }, []);

  async function randomQuote() {
    const quotes = await fetchQuotes();
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    setQuote('"' + randomQuote.quote + '"');
    setAuthor("-" + randomQuote.author);
  }

  async function handleClick() {
    await randomQuote();
  }

  function handleWho(){
    const name = author.replace(/-/g, "").trim();
    const url = "https://www.google.com/search?q="+name 
    window.open(url, '_blank');
  }

  return (
    <div className="App">
      <Title>Random Quote Generator " -"</Title>
      <Card>
        <div id="quote-box">
          <div id="text">{quote}</div>
          <div id="author">{author}</div>
          <div id="buttons-wrapper">
            <a title="Twister" id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <Button title="Who?" id="who" onClick={handleWho}>
              ?
            </Button>
            <Button title="New quote" id="new-quote" onClick={handleClick}>
              <i className="fa fa-arrows-rotate"> </i>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default App;
