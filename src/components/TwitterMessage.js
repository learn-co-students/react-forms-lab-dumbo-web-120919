import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = { currentCharacters: 280};
  }

  handleTextInput = (e) => {
    console.log(e.target.value)
    let currentChars = this.state.currentCharacters
    let maxChars = this.props.maxChars
    let length = e.target.value.length
    if (currentChars < maxChars+1) {
      this.setState({currentCharacters: maxChars - length  })
    }
    
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={(e) => this.handleTextInput(e)} />
        <p>Current Characters Left: {this.state.currentCharacters}</p>
      </div>
    );
  }
}

export default TwitterMessage;
