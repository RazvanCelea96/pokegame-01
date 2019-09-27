import React from "react";
import "./App.css";
import Particles from "react-particles-js";
import Pokedex from "./Pokedex";

const ParticleOptions = {
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Pokedex />
        <Particles className="particles" params={ParticleOptions} />
      </div>
    );
  }
}

export default App;
