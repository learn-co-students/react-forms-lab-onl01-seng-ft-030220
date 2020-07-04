import React, { Component } from "react";

class TwitterMessage extends Component {
  constructor() {
    super()

    this.state = {
      message: ""
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const remainingChars = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          name="message" 
          id="message" 
          value={this.state.message} 
          onChange={event => this.handleChange(event)}
        />
        {remainingChars}
      </div>
    )
  }
}

export default TwitterMessage
