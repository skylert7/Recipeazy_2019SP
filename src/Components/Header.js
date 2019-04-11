import React from 'react';
import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

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
        <GoogleAuth/>
      </div>
    </div>
    );
  }
}
