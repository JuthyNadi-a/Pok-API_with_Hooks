import { NavLink } from 'react-router-dom';
import React from 'react';
import classes from './Nav.module.css'

const Nav = () => {
    return (
        
        <nav className={classes.nav}>
            <ul>
                <div className={classes.links}>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/Pokelist'>Pokelist</NavLink></li>
                <li><NavLink to='/About'>About</NavLink></li>
                </div>
            </ul>
        </nav>
       
    );
};

export default Nav;