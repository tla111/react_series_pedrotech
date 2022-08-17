import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <Link to="/" style={{ margin: " 2px" }}>Home</Link>
            <Link to="/profile" style={{ margin: " 2px" }}>Profile</Link>
            <Link to="/contact" style={{ margin: " 2px" }}>Contact</Link>
        </div>
    )
}

export default Navbar