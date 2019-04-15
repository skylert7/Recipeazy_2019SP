// Import ReactDOM and React
import React from 'react';
import '../../static/layout.css'; // Tell Webpack that .js uses these styles

export default class Secret extends React.Component {
  render() {
    return(
      <div className="wrapper row2">
        <div id="container" className="clear">
          <section id="slider">
        		<h5>Welcome to Recipeazy!</h5>
        		<h6>You can see secret now. Woohoo!</h6>
      	  </section>
        </div>
      </div>
    );
  }
}
