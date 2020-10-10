import React from 'react';
import Favourites from './Favourites';
import Home from './Home';
import Search from './Search';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

function Container(props) {
    return (
        <Router>
            <div>Container</div>
            <Switch>
                <Route path='/' exact render={() => <Home />} />
                <Route path='/search' exact render={() => <Search />} />
                <Route path='/favourites' exact render={() => <Favourites />} />
                <Route path='/favourite/:id' exact render={({ match }) => <Favourites match={match} />} />
            </Switch>
        </Router>
    );
}

export default Container;