import React from 'react';
import NavBarLinks from './NavBarLinks';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


function NavBar(props) {
    return (
        <Router>
            <NavBarLinks />
        </Router>
    )
}

export default NavBar;