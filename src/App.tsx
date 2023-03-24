import React from "react";
import "./App.css";
import Button from "./components/button/button";
import Card from "./components/card/card";
import Title from "./components/title/title";

function App() {
  return (
    <div className="App">
      <Title>
        Random Quote Generator " -"
      </Title>
      <Card>
        <div id="quote-box">
        </div>
        <Button>Carlos</Button>
      </Card>
    </div>
  );
}

export default App;
