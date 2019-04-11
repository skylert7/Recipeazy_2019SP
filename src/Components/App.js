// Import ReactDOM and React
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Modal from 'react-modal';
import Popup from "reactjs-popup";
import StreamList from './streams/StreamList';
import StreamEdit from './streams/StreamEdit';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import Home from './Homepage/Home';
import Header from './Header';

// var faker = require('faker');


class App extends React.Component {
  render(){
    return (
      <div>
        <BrowserRouter>
          <Route path = "/home" exact component={Home}/>
          <Header/>
          <div>
            <Route path = "/" exact component={StreamList}/>
            <Route path = "/streams/new" exact component={StreamCreate}/>
            <Route path = "/streams/edit" exact component={StreamEdit}/>
            <Route path = "/streams/delete" exact component={StreamDelete}/>
            <Route path = "/streams/show" exact component={StreamShow}/>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
