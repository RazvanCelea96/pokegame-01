import React from "react";
import "./Pokecard.css";
const linkoo = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/";

let imgSize = {
  // margin: '20px',
  width: "150px",
  height: "150px"
};

class Pokecard extends React.Component {
  render() {
    const { id, type, power } = this.props;
    let imgSource = `${linkoo}${id}.png`;

    return (
      <div className="Pokecard">
        {/* <h1 className="name">{name }</h1> */}
        <h1>
          {" "}
          <img src={imgSource} style={imgSize} alt="description" />{" "}
        </h1>
        <div>Type : {type}</div>
        <div>Power : {power}</div>
      </div>
    );
  }
}

export default Pokecard;
