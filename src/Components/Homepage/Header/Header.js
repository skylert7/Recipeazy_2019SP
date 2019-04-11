// Import ReactDOM and React
import React from 'react';
import ReactDOM from 'react-dom';
import '../../static/layout.css'; // Tell Webpack that .js uses these styles

export default class Footer extends React.Component {
  render() {
    return(
      <div className="wrapper row1">
        <header id="header" class="clear">
        	<h1>Recipeazy</h1>
          <nav>
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>Recipes</li>
              <li>Sign In/Sign Up</li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}
