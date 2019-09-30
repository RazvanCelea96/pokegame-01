import React from "react";
import "./App.css";
import Particles from "react-particles-js";
import Pokelist from "./Pokelist";

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
        <Pokelist />
        <Particles className="particles" params={ParticleOptions} />
      </div>
    );
  }
}

export default App;
