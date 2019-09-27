import React from 'react';

class AnswerField extends React.Component {
  constructor(props)
  {
    super(props);
    this.state= {value: ''};
  }
    answerInput = React.createRef();
  
    handleSubmit = e => {
    //   e.preventDefault();
    //   this.props.addAnswer(this.answerInput.current.value);
    //   e.currentTarget.reset();
   };
  
    render() {
      return (
        <form className="form" onSubmit={this.handleSubmit} >
          <input 
            type="text"

            ref={this.answerInput}
            placeholder="Who's that Pokemon!?"
          />
  
          <input type="submit" value="Answer" />
        </form>
      );
    }
  }
  
  export default AnswerField;