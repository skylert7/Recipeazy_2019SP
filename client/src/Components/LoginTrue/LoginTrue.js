import React from "react";
import '../static/Login.css';

export default class True extends React.Component {
  constructor(props) {
    super(props);
}

  render() {
    return (
      <div className="ui middle aligned center aligned grid">
        <div className="column">
          <h2 className="ui teal image header">
            <div className="content">
              If you can see this, you are logged in!
            </div>
          </h2>
        </div>
      </div>
    );
  }
}
