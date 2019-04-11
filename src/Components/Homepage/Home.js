// Import ReactDOM and React
import React from 'react';
import ReactDOM from 'react-dom';
import '../static/layout.css'; // Tell Webpack that .js uses these styles
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import GoogleAuth from '../GoogleAuth';

export default class Home extends React.Component {
  render() {
    return(
      <div>
        <Header>
        <GoogleAuth/>
        </Header>
        <Body/>
        <Footer/>
      </div>
    );
  }
}
