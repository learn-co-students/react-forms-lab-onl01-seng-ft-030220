import React from "react";
class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ''
    };
  }
  handleChange = event => {
    this.setState({
      message: event.target.value
    })
  }
  render() {
  let charLimit = this.props.maxChars - this.state.message.length
  return (
    <div>
      <strong>Your message:</strong>
      <input type="text" onChange={this.handleChange} value={this.state.message} />
      {charLimit}
    </div>
  )
  }
}
export default TwitterMessage;