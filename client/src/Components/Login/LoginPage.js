import React from "react";
import './Login.css';
import { login } from './UserFunctions'
import {Link} from 'react-router-dom';
export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user_name: "",
      password: ""
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
        password: this.state.password
    }

    login(user).then(res => {
        if (res) {
            this.props.history.push(`/profile`)
        }
    })
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
              <form noValidate onSubmit={this.onSubmit} className="ui large form">
                <div className="ui stacked segment">
                  <div className="field">
                    <div className="ui left icon input">
                      <i className="user icon"></i>
                      <input
                        type="text"
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
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.onChange}
                      />
                    </div>
                  </div>
                  <div type = 'submit' className="ui fluid large teal submit button">Login</div>
                </div>
                <div caselass="ui error message"></div>
              </form>
              <div className="ui message">
                New to us? <Link to="#">Sign Up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
