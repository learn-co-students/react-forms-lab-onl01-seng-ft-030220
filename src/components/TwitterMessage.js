import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = { 
      post: ''
    };
  }
  handleInputChange = event => { 
    this.setState({
      post: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
        onChange={this.handleInputChange} 
        value={this.state.post}/>
        <p>{this.props.maxChars - this.state.post.length}</p>
      </div>
    );
  }
}


TwitterMessage.defaultProps = {
  maxChars: 280,
}


export default TwitterMessage;


