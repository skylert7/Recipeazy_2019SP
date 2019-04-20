import React from "react";
import '../static/Login.css';
import { login } from '../UserFunctions/UserFunctions'
import {Link} from 'react-router-dom';
export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user_name: "",
      user_password: ""
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }


  onChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit (e) {
    e.preventDefault()
    const user = {
        user_name: this.state.user_name,
        user_password: this.state.user_password
    }

    // fetch('http://localhost:4000/users/login', {
    //   credentials: 'same-origin',
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(user)
    // })
    // .then(res => {
    //   if (res) {
    //       this.props.history.push(`/loginTrue`)
    //     }
    // })

   login(user).then(res => {
        if (res) {
            this.props.history.push(`/loginTrue`)
          }
    })
    .catch(err => {
      console.error(err);
      alert('Error logging in please try again');
    });
  }

  render() {
    return (
      <div className ='my_wrapper'>
        <div className = 'f1_center'>
          <div className="ui middle aligned center aligned grid">
            <div className="column">
              <h2 className="ui teal image header">
                <div className="content">
                  Log-in to your account
                </div>
              </h2>
              <form onSubmit={this.onSubmit} className="ui large form">
                <div className="ui stacked segment">
                  <div className="field">
                    <div className="ui left icon input">
                      <i className="user icon"></i>
                      <input
                        type="user_name"
                        name="user_name"
                        placeholder="Username"
                        value={this.state.user_name}
                        onChange={this.onChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="ui left icon input">
                      <i className="lock icon"></i>
                      <input
                        type="password"
                        name="user_password"
                        placeholder="Password"
                        value={this.state.user_password}
                        onChange={this.onChange}
                      />
                    </div>
                  </div>
                  <button type = "submit" className="ui fluid large teal submit button">Login</button>
                </div>
                <div caselass="ui error message"></div>
              </form>
              <div className="ui message">
                New to us? <Link to="/register">Sign Up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
