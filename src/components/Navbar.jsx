import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

function Header() {
    return (
        <div className="header">
            <div className="Navbar">
                <h2></h2>DEV_FILES
                <ul>
                    <a href="">
                        <li>Home</li>
                    </a>
                    <a href="">
                        <li>About</li>
                    </a>
                    <a href="">
                        <li>Contact US</li>
                    </a>
                </ul>
            </div>
            <Link to="/submitDetails">SubmitDetails</Link>
        </div>
    );
}

export default Header;
