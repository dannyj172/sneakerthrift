import React from 'react'
import './Header.css';

import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header>
            <div className='logo'>
                <h1>SNEAKER<span>THRIFT</span></h1>
            </div>

            {/* <nav>
                <Link to="#">Home</Link>
                <Link to="#">Catalog</Link>
                <Link to="#">Create Listing</Link>
                <Link to="#">Logout</Link>
                <Link to="#">Login</Link>
                <Link to="#">Register</Link>
            </nav> */}

            <ul className='header-menu'>
                <Link to="#">Home</Link>
                <Link to="#">Catalog</Link>
                <Link to="#">Create Listing</Link>
                <Link to="#">Logout</Link>
                <Link to="#">Login</Link>
                <Link to="#">Register</Link>
            </ul>



        </header>
    )
}