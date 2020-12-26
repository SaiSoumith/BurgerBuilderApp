import React from 'react';
import classes from './NavigationItem.module.css';
import {NavLink} from 'react-router-dom';

export default function navigationalItem(props) {
    return (
        <li className={classes.NavigationItem}>
            <NavLink 
               exact={props.exact}
               activeClassName={classes.active}
               to={props.link } >{props.children}</NavLink>
        </li>
    )
}
