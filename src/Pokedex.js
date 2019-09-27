import React from "react";
import Pokecard from "./Pokecard";
import AnswerField from "./AnswerField";

class Pokedex extends React.Component {
  static defaultProps = {
    pokemonList: [
      {
        id: "003",
        name: "Venusar",
        type: "Grass",
        power: 200
      },

      {
        id: "025",
        name: "Pikachu",
        type: "Electric",
        power: 150
      },
      {
        id: "197",
        name: "Umbreon",
        type: "Dark",
        power: 190
      },

      {
        id: "392",
        name: "Infernape",
        type: "Fire",
        power: 200
      },
      {
        id: "006",
        name: "Charizard",
        type: "Fire",
        power: 250
      },
      {
        id: "149",
        name: "Dragonite",
        type: "Dragon",
        power: 250
      },
      {
        id: "052",
        name: "Meowth",
        type: "Normal",
        power: 50
      },
      {
        id: "094",
        name: "Gengar",
        type: "Ghost",
        power: 190
      },
      {
        id: "059",
        name: "Arcanine",
        type: "Fire",
        power: 170
      },
      {
        id: "007",
        name: "Squirtle",
        type: "Water",
        power: 70
      },
      {
        id: "130",
        name: "Gyrados",
        type: "Water",
        power: 220
      }
    ]
  };
  render() {
    return (
      <div className="Pokedex">
        {
          (this.randomPokemon = this.props.pokemonList.map(p => (
            <Pokecard id={p.id} name={p.name} type={p.type} power={p.power} />
          ))[Math.floor(Math.random() * this.props.pokemonList.length)])
        }
        <AnswerField answerField={this.addAnswer} />
      </div>
    );
  }
}
export default Pokedex;
