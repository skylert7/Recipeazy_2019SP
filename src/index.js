import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Popup from "reactjs-popup";

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);

// ReactDOM.render(
//     <Popup />,
//     document.getElementById('popupContainer')
// );
//
// Popup.alert('Hello');


export default () => (
  <Popup trigger={<button> Trigger</button>} position="right center">
    <div>Popup content here !!</div>
  </Popup>
);

// class ExampleApp extends React.Component {
//   constructor () {
//     super();
//     this.state = {
//       showModal: false
//     };
//
//     this.handleOpenModal = this.handleOpenModal.bind(this);
//     this.handleCloseModal = this.handleCloseModal.bind(this);
//   }
//
//   handleOpenModal () {
//     this.setState({ showModal: true });
//   }
//
//   handleCloseModal () {
//     this.setState({ showModal: false });
//   }
//
//   render () {
//     return (
//       <div>
//         <button onClick={this.handleOpenModal}>Trigger Modal</button>
//         <ReactModal
//            isOpen={this.state.showModal}
//            contentLabel="Minimal Modal Example"
//         >
//           <button onClick={this.handleCloseModal}>Close Modal</button>
//         </ReactModal>
//       </div>
//     );
//   }
// }
//
// const props = {};
//
// ReactDOM.render(<ExampleApp {...props} />, document.getElementById('main'))
