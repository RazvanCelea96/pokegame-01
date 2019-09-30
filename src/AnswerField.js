import React from "react";

class AnswerField extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleValueChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    const { value } = this.state;
    alert(`Your answer is ${value}`);
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
