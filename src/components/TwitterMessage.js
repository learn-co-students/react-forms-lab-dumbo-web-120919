import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      tweetContent: ""
    };
  }

  countRemainingChars = () => {
    return this.props.maxChars - this.state.tweetContent.length
  }

  handleTweetChange = (event) => {
    this.setState({
      tweetContent: event.target.value
    })
  }

  render() {
    return (
      <div>
        <div>
          <strong>Your message:</strong>
          <input type="text" name="message" id="message" value={this.state.tweetContent} onChange={this.handleTweetChange} />
        </div>
        <div>
          {this.countRemainingChars()}
        </div>
      </div>
    );
  }
}

export default TwitterMessage;
