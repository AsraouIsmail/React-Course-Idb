/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';


 function Navbar(props) {
     const {title} = props;
    return (
        <div>
            <h2>{title}</h2>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <a className="navbar-brand" >Navbar</a>
                
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" >Home</a>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link">Link</a>
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