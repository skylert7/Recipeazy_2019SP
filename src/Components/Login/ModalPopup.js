import React from 'react';
import Popup from "reactjs-popup";

export default class ModalPopup extends React.Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)

  }
  openModal (){
    this.setState({ open: true })
  }
  closeModal () {
    this.setState({ open: false })
  }

  render() {
    return (
      <div>
        <button className="button" onClick={this.openModal}>
          {this.props.title}
        </button>
        <Popup
          open={this.state.open}
          closeOnDocumentClick
          onClose={this.closeModal}
        >
          <div className="ui input">
            <input type="text" placeholder="Username"/>
          </div>
          <div className="ui input">
            <input type="text" placeholder="Password"/>
          </div>
          <button className='submit'>Submit</button>
          <div className="modal">
            <button className="close" onClick={this.closeModal} >
              close
            </button>
          </div>
        </Popup>
      </div>
    )
  }
}
