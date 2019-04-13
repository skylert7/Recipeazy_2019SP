// Import ReactDOM and React
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Homepage/Home';
import LoginPage from './Login/LoginPage';
import Registration from './Registration/Registration'
import LoginTrue from './LoginTrue/LoginTrue';
// var faker = require('faker');


class App extends React.Component {
  render(){
    return (
      <div>
        <BrowserRouter>
          <div>
              <Route path = "/" exact component={Home}/>
              <Route path = '/register' exact component = {Registration}/>
              <Route path = "/login" exact component={LoginPage}/>
              <Route path = "/loginTrue" exact component={LoginTrue}/>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
