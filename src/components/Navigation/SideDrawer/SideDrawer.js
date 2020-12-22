import React from 'react'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxi from '../../../hoc/Auxi/Auxi';

export default function sideDrawer(props) {

let attachedClasses=[classes.SideDrawer,classes.Close]
if(props.openState){
    attachedClasses=[classes.SideDrawer,classes.Open]
}


    return (
        <Auxi>
        <Backdrop 
           show={props.openState}
           clicked={props.closeHandler}   />
       
        <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
                <Logo />
            </div>
        <nav>
            <NavigationItems/>
        </nav>
        </div>
            
        
        </Auxi>
    )
}
