import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Principal from './pages/Principal';
import Operations from './pages/Operations';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path = '/' exact component = { Principal } />
                <Route path = '/operations' exact component = { Operations } />
            </Switch>
        </BrowserRouter>

    );
}