import React from "react";
import "./App.css";
import Pokedex from "./Pokedex";
class App extends React.Component {
  render() {
  
    return (
      <div>
        <Pokedex Card={(id, name, power, faction)} />
      </div>
    );
  }
}

export default App;
