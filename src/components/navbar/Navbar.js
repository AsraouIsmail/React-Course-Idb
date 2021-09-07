/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


 function Navbar(props) {
     const {title} = props;
    return (
        <div>
            <h2>{title}</h2>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <a className="navbar-brand" >Navbar</a>
                
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link  className="nav-link" to="/" >Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/contact/add">Add</Link>
                        </li>
                        <li class="nav-item">
                            <Link  className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
            </nav>
            
        </div>
    )
}

// Navbar.defaultProps = {
//     title: "un titre par default"
// }
Navbar.prototype = {
    title: PropTypes.string.isRequired
}
export default Navbar;