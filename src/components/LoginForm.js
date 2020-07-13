import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = { 
      username: '',
      password: '',
    };
  }

  handleInputChange = event => { 
    const {name, value} = event.target
    this.setState({ 
      [name] : value
    })
  }

  onFormSubmit = event => {
    event.preventDefault()
    const {username, password} = this.state
    if(username && password){
      this.props.handleLogin(this.state)
    }
  }
  
    render() {
      return (
        <form onSubmit={event => this.onFormSubmit(event)}>
          <div>
            <label>
              Username
              <input
                id="username"
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChange}
               />
            </label>
          </div>
          <div>
            <label>
              Password
              <input
                id="password"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
               />
            </label>
          </div>
          <div>
            <button type="submit">Log in</button>
          </div>
        </form>
      );
    }
  }
  
 
  
  
  export default LoginForm;