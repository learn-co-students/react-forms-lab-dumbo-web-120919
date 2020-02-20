import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: '',
    };
  }

  handleInputText = event => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={event => this.handleInputText(event)} name="message" id="message" value={this.state.message} />
        <strong>{280 - this.state.message.length} characters remaining</strong>
      </div>
    );
  }
}

export default TwitterMessage;
