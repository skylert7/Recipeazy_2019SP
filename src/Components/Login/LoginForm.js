import React from 'react';
import ModalPopup from './ModalPopup';

export default class LoginForm extends React.Component {
    //
    // constructor(props) {
    //   super(props)
    //   this.state = {isShowing:false};
    // }
    //
    // openModalHandler = () => {
    //     this.setState({
    //         isShowing: true
    //     });
    // }
    //
    // closeModalHandler = () => {
    //     this.setState({
    //         isShowing: false
    //     });
    // }
    //
    // render () {
    //     return (
    //         <div>
    //             { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }
    //
    //             <a onClick={this.openModalHandler}></a>
    //
    //             <ModalPopup
    //                 className="modal"
    //                 title = {this.props.title}
    //                 show={this.state.isShowing}
    //                 close={this.closeModalHandler}
    //                 color={{ color: 'red' }}
    //                 >
    //                     Maybe aircrafts fly very high because they don't want to be seen in plane sight?
    //             </ModalPopup>
    //         </div>
    //     );
    // }
}
