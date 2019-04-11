import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Modal from 'react-modal';
import Popup from "reactjs-popup";

export default class Header extends React.Component{
  render(){
    return (
    <div className='ui secondary pointing menu'>
      <Link to = '/' className='item'>
          List_of_stream
      </Link>
      <div className = 'right menu'>
        <Link to = '/' className='item'>
            All_Streams
        </Link>
      </div>
    </div>
    );
  }
}
