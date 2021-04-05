import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Login from './pages/Login';
import Main from "./pages/Main";
import Match from './pages/Match';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/tindev" exact component={Login} />
            <Route path="/dev/:id" exact component={Main}/>
            <Route path="/dev/:id/matchs" component={Match}/>
        </BrowserRouter>
    )
}