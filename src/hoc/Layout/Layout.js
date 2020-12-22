
import Auxi from '../Auxi/Auxi';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'
import React, { Component } from 'react';


class Layout extends Component{
   
   
   state={
      showSideDrawer:false
   }
   sideDrawerCloseHandler=()=>{
       this.setState({showSideDrawer:false})
   }
//    sideDrawerOpenHandler=()=>{
//     this.setState({showSideDrawer:true})
// }
   
sideDrawerToggleHandler = () => {
    this.setState( ( prevState ) => {
        return { showSideDrawer: !prevState.showSideDrawer };
    } );
}
    render(){
    return (
        <Auxi>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
        <SideDrawer 
              openState={this.state.showSideDrawer}
              closeHandler={this.sideDrawerCloseHandler}/>
        <main className={classes.Content}>

            {this.props.children}
        </main>
        </Auxi>
    );}
};

export default Layout;