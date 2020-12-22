import React ,{Component}from 'react';
import classes from './Modal.module.css'
import Auxi from '../../../hoc/Auxi/Auxi';
import BackDrop from '../Backdrop/Backdrop'
class Modal extends Component{
    
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.show!==this.props.show || nextProps.children!==this.props.children)
        return true;

        return false;

    }
    componentDidUpdate(){
        console.log('[Modal.js] component did update')
    }
    
    
    render(){
        return (
            <Auxi>
                <BackDrop show={this.props.show} clicked={this.props.modalClosed} />
            <div style={{ 
                transform: this.props.show ? 'translateX(0)' : 'translateX(-100vh)',
                opacity: this.props.show ? '1' : '0'}}
                className={classes.Modal}>
                {this.props.children}
            </div>
            </Auxi>
        );
    
    }
}
export default Modal;