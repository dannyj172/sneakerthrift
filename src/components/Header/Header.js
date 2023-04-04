import React from 'react'
import './Header.css';

import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

export const Header = () => {
    const { isAuthenticated } = useContext(AuthContext);
    return (
        <header>
            <div className='logo'>
                <h1>SNEAKER<span>THRIFT</span></h1>
            </div>

            <ul className='header-menu'>
                <Link className='links' to="/">Home</Link>
                <Link className='links' to="/catalog">Catalog</Link>
                {isAuthenticated && (
                    <>
                        <Link className='links' to="/my-listings">My Listings</Link>
                        <Link className='links' to="/create-listing">Create Listing</Link>
                        <Link className='links' to="/logout">Logout</Link>
                    </>
                )}
                {!isAuthenticated && (
                    <>
                        <Link className='links' to="/login">Login</Link>
                        <Link className='links' to="/register">Register</Link>
                    </>
                )}
            </ul>
        </header>
    )
}