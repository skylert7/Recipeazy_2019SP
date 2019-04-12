// Import ReactDOM and React
import React from 'react';

export default class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "1067077420380-sadl3tb5rkl7o9u706t2c16e047cmijd.apps.googleusercontent.com",
          scope: "email"
        }).then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() })
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className ='ui red google button'>
          Sign out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className ='ui red google button'>
          Sign in with Google
        </button>
      );
    }
  }

  render() {
    return( <div>{this.renderAuthButton()}</div>);
  }
}
