import React from "react";
import "./App.css";
import Button from "./components/button/button";
import Card from "./components/card/card";
import Title from "./components/title/title";

function App() {
  function handleClick(){
    console.log('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');
  }
  return (
    <div className="App">
      <Title>
        Random Quote Generator " -"
      </Title>
      <Card>
        <div id="quote-box">
        </div>
        <Button onClick={handleClick}>Carlos</Button>
      </Card>
    </div>
  );
}

export default App;
