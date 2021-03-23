import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Principal from './pages/Principal';
import Choose from './pages/Choose';
import Soma from './pages/Soma';
import Subtracao from './pages/Subtracao';
import Multiplicacao from './pages/Mutiplicacao';
import Divisao from './pages/Divisao';
import Potenciacao from './pages/Potenciacao';
import Modulo from './pages/Modulo';
import Baskhara from './pages/Baskhara';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path = '/' exact component = { Principal } />
                <Route path = '/soma' exact component = { Soma } />
                <Route path = '/choose' exact component = { Choose } />
                <Route path = '/sub' exact component = { Subtracao } />
                <Route path = '/multi' exact component = { Multiplicacao } />
                <Route path = '/div' exact component = { Divisao } />
                <Route path = '/pot' exact component = { Potenciacao } />
                <Route path = '/mod' exact component = { Modulo } />
                <Route path = '/bask' exact component = { Baskhara } />
            </Switch>
        </BrowserRouter>

    );
}