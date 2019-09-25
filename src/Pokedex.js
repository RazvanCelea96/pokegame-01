import React from "react";
import Pokecard from "./Pokecard";

class Pokedex extends React.Component {
  render() {
    const { id, name, type, power } = this.props;
    const randomPokemon = Pokecard[Math.floor(Math.random() * Pokecard.length)];


 
    return (
     <div ></div>
    );
  }
}

export default Pokedex;
