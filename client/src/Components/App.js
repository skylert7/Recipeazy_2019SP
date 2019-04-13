// Import ReactDOM and React
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Homepage/Home';
import LoginPage from './Login/LoginPage';
// var faker = require('faker');


class App extends React.Component {
  render(){
    return (
      <div>
        <BrowserRouter>
          <div>
              <Route path = "/" exact component={Home}/>
              <Route path = "/login" exact component={LoginPage}/>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
