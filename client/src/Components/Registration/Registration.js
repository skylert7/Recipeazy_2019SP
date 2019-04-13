import React from 'react'
import { register } from '../UserFunctions/UserFunctions'
const random = require('random')

export default class Register extends React.Component {
    constructor() {
        super()
        this.state = {
            /*user_id: random.int(1000, 100000),*/
            first_name: '',
            last_name: '',
            user_name: '',
            user_password: ''
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
            user_id: this.state.user_id,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            user_name: this.state.user_name,
            user_password: this.state.user_password
        }

        register(user).then(res => {
            this.props.history.push(`/login`)
        })
    }

    render () {
        return (
          <div className="container">
              <div className="row">
                  <div className="col-md-6 mt-5 mx-auto">
                      <form onSubmit={this.onSubmit}>
                          <h1 className="h3 mb-3 font-weight-normal">Sign Up Form</h1>
                          <div className="ui form">
                            <div className="fields">
                              <div className="field">
                                <label>First Name</label>
                                <input type="text"
                                  name="first_name"
                                  value={this.state.first_name}
                                  onChange={this.onChange}
                                  placeholder="First Name"/>
                              </div>
                              <div className="field">
                                <label>Last Name</label>
                                <input type="text"
                                  name="last_name"
                                  value={this.state.last_name}
                                  onChange={this.onChange}
                                  placeholder="Last Name"/>
                              </div>
                              <div className="field">
                                <label>Username</label>
                                <input type="text"
                                  name="user_name"
                                  value={this.state.user_name}
                                  onChange={this.onChange}
                                  placeholder="Username"/>
                              </div>
                              <div className="field">
                                <label>Password</label>
                                <input type="password"
                                  name="user_password"
                                  value={this.state.user_password}
                                  onChange={this.onChange}
                                  placeholder="Password"/>
                              </div>
                            </div>
                          </div>
                          <button type="submit"
                              className="btn btn-lg btn-primary btn-block">
                              Register
                          </button>
                      </form>
                  </div>
              </div>
          </div>
        );
    }
}
