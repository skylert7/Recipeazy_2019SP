// Import ReactDOM and React
import React from 'react';
import '../../static/layout.css'; // Tell Webpack that .js uses these styles
//{this.props.children}
import {Link} from 'react-router-dom';
export default class Header extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div className="wrapper row1">
        <header id="header" className="clear">
            <h1><Link to="/">Recipeazy</Link></h1>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/secret">Secret</Link></li>
                <li><Link to="/">Services</Link></li>
                <li><Link to="/">Recipes</Link></li>
                <li><Link to="/login">Login</Link></li>
              </ul>
            </nav>
        </header>
      </div>
    );
  }
}
