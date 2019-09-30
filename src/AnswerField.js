import React from "react";
class AnswerField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      name: [
        "ARCANINE",
        "VENUSAR",
        "GENGAR",
        "PIKACHU",
        "UMBREON",
        "INFERNAPE",
        "CHARIZARD",
        "DRAGONITE",
        "SQUIRTLE",
        "GYRADOS",
        "MEOWTH"
      ]
    };
  }

  handleValueChange = event => {
    this.setState({ value: event.target.value.toUpperCase() });
  };

  handleSubmit = event => {
    const { value, name } = this.state;

    if (name.indexOf(value) > -1) {
      alert("You are right!");
    } else {
      alert("Bummer! Not the right Pokemon");
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-grup"></div>
        <input
          type="text"
          onChange={this.handleValueChange}
          placeholder="Who's that Pokemon!?"
        />

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default AnswerField;
