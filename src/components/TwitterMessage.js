import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleChange(event)} value={this.state.message} /> <br />
        <strong>Max Characters: </strong> {this.props.maxChars - this.state.message.length} / {this.props.maxChars}
      </div>
    );
  }
}

export default TwitterMessage;
