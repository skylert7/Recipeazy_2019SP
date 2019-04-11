// Import ReactDOM and React
import React from 'react';
import ReactDOM from 'react-dom';
import '../../static/layout.css'; // Tell Webpack that .js uses these styles

export default class Footer extends React.Component {
  render() {
    return(
      <div className="wrapper row4">
        <footer id="copyright" class="clear">
          <p class="fl_center">Copyright &copy; 2019 - All Rights Reserved - Recipeazy</p>
        </footer>
      </div>
    );
  }
}
