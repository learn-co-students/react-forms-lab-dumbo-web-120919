import React from "react";

class LoginForm extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {};
  // }

  state = {
    userName: " ",
    password: " "
  }

  handleForm = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmitForm = (e) => {
    e.preventDefault()
    
      if ( !this.state.username || !this.state.password )
      return 
        this.props.handleLogin(this.state)

  }

  render() {
    console.log(this.state.username)
    console.log(this.state.password)

    return (
      <form onSubmit={this.handleSubmitForm}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleForm} value={this.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleForm} value={this.password} />
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
