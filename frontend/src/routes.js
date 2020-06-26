import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Aula from './pages/Aula';
import CriarAtividade from './pages/Quiz/Dialogs/CriarAtividade';
import AbrirAtividade from './pages/Quiz/Dialogs/AbrirAtividade';
import Atividade from './pages/Quiz/Dialogs/Atividade';


function Routes() {
    return(
        <BrowserRouter>
            <Route component={Home} path='/' exact />
            <Route component={Cadastro} path='/cadastro' />
            <Route component={Aula} path='/aula' />
            <Route component={CriarAtividade} path='/aula/atividade/criar' />
            <Route component={AbrirAtividade} path='/aula/atividade/abrir' />
            <Route component={Atividade} path='/aula/atividade' />
        </BrowserRouter>
    )
}

export default Routes;