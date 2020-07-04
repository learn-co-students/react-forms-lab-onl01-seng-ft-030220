import React, { Component } from 'react'
import LoginForm from "./components/LoginForm";
import TwitterMessage from "./components/TwitterMessage";

class App extends Component {

  state = {
    maxChars: ""
  }
  
  login = ({ username, password }) => {
    console.log(`Logging in ${username} with password ${password}`);
  };

  render() {
    return (
      <div>

        <h1>
          <pre>LoginForm</pre>
        </h1>
        <LoginForm handleLogin={this.login} />

        <h1>
          <pre>TwitterMessage</pre>
        </h1>
        <TwitterMessage maxChars={280} formData={this.state} />



      </div>
    )
  }
}

export default App
