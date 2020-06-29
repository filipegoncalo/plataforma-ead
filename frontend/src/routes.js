import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Dashboard from './pages/DashBoard';
import Aula from './pages/Aula';


function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/cadastro' component={Cadastro}/>
                <Route path='/dashboard' component={Dashboard}/>
                <Route path='/dashboard/aula' component={Aula}/>
                </Switch>
        </BrowserRouter>
    )
}
export default Routes;