import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function NavBarLinks(props) {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/search">Search</Link>
            <Link to="/favourites">Favourites</Link>
        </div>
    );
}

export default NavBarLinks;