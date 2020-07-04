import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const remainingChars = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>{remainingChars}</strong>
        <input
        type="text"
        name="message"
        id="message"
        onChange={event => this.handleChange(event)}
        value={this.state.message}
        />
      </div>
    );
  }
}

export default TwitterMessage;
