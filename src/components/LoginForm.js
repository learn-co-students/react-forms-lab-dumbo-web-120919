import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleFormChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit= e => {
    e.preventDefault()

    if (!this.state.username || !this.state.password) return console.log("Fill please")

    this.props.handleLogin(this.state)
  }


  render() {
    console.log(this.state.username)
    console.log(this.state.password)
    return (
      <form onSubmit={this.handleSubmit} >
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={(e) => this.handleFormChange(e)}  value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={(e) => this.handleFormChange(e)} value={this.state.password} />
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
