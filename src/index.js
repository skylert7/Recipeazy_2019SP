// Import ReactDOM and React
import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
// import Modal from 'react-modal';
// import Popup from "reactjs-popup";
// import CommentDetails from './CommentDetails';
// import ApprovalCard from './ApprovalCard';
// import SeasonDisplay from './SeasonDisplay';
// var faker = require('faker');


// Create a react component
//
    // <div className = "ui container comments">
    //
    //   <ApprovalCard>
    //     <div>
    //       <h4> Warning! </h4>
    //       Are you sure you want to do this?
    //     </div>
    //   </ApprovalCard>
    //
    //   <ApprovalCard>
    //     <CommentDetails
    //       author = 'Sam'
    //       timeAgo = 'Today at 5:00PM'
    //       comment = 'Nice blog'
    //       avatar = {faker.image.avatar()}
    //     />
    //   </ApprovalCard>
    //
    //   <ApprovalCard>
    //   <CommentDetails
    //     author = 'Alex'
    //     timeAgo = 'Today at 4:00PM'
    //     comment = 'Good progress'
    //     avatar = {faker.image.avatar()}
    //     />
    //   </ApprovalCard>
    //
    //   <ApprovalCard>
    //   <CommentDetails
    //     author = 'Jane'
    //     timeAgo = 'Today at 3:00PM'
    //     comment = 'Cool'
    //     avatar = {faker.image.avatar()}
    //     />
    //   </ApprovalCard>
    //
    //   <ApprovalCard>
    //   <CommentDetails
    //     author = 'Tester'
    //     timeAgo = 'Yesterday at 5:00PM'
    //     comment = 'Very good'
    //     avatar = {faker.image.avatar()}
    //     />
    //   </ApprovalCard>
    //
    // </div>

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.state = { lat: null, errorMessage: '' };
//
//     window.navigator.geolocation.getCurrentPosition(
//       position => {
//         //called setState because only setState can modify state
//         this.setState({ lat : position.coords.latitude});
//       },
//       err => {
//         this.setState({ errorMessage : err.message })
//       }
//     );
//   }
//
//   componentDidMount(){
//     console.log('My component was rendered to the screen');
//   }
//
//   componentDidUpdate(){
//     console.log('My component was just updated - rerendered');
//   }
//
//   render() {
//     if(this.state.errorMessage && !this.state.late){
//       return <div>Error: {this.state.errorMessage}</div>;
//     }
//
//     if(!this.state.errorMessage && this.state.late){
//       return <div>Latitude: {this.state.lat}</div>;
//     }
//
//     return <div>Loading!</div>;
//   }
// }





// Take the react component and show it to
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
