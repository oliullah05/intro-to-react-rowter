import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='flex justify-evenly'>
            
            <Link to="/">Home</Link>
            <Link to="/friends">Friends</Link>
            <Link to="/contract">contract</Link>
            <Link to="/about">About</Link>
    
           
        </nav>
    );
};

export default Nav;