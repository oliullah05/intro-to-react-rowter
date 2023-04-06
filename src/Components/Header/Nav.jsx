import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Nav = () => {
    return (
        <nav className='flex justify-evenly'>
            
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/friends">Friends</ActiveLink>
            <ActiveLink to="/posts">Posts</ActiveLink>
            <ActiveLink to="/contract">contract</ActiveLink>
            <ActiveLink to="/about">About</ActiveLink>
    
           
        </nav>
    );
};

export default Nav;