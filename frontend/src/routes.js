import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Quiz from './pages/Quiz/Dialogs/Atividade';


function Routes() {
    return(
        <BrowserRouter>
            <Route component={Home} path='/' exact />
            <Route component={Cadastro} path='/cadastro' />
        </BrowserRouter>
    )
}

export default Routes;