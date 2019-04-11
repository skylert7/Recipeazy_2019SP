// Import ReactDOM and React
import React from 'react';
import '../../static/layout.css'; // Tell Webpack that .js uses these styles

export default class Header extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div className="wrapper row1">
        <header id="header" className="clear">
        	<h1>Recipeazy</h1>
          <nav>
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>Recipes</li>
              <li>{this.props.children}</li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}
