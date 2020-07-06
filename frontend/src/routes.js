import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Main from './components/Main';
import Dashboard from '../src/pages/DashboardProfessor/dashboardProfessor';
import DashboardDisciplinas from '../src/pages/DisciplinasProfessor/disciplinas';
import DashboardExercicios from '../src/pages/ExerciciosProfessor/exercicios';
import Aula from './pages/Aula';
import ProvasProfessor from './pages/ProvasProfessor';
import ExerciciosCriar from './pages/ExerciciosCriar';
import ListarAtividadeScreen from './pages/ListarAtividadeScreen';
import CriarAtividade from './pages/CriarAtividade';
import Perfil from './pages/Perfil';


function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} exact/>
                <Route path='/cadastro' component={Cadastro}/>
                <Route path='/dashboard' component={Dashboard}/>
                <Route path='/dashboard/aula' component={Aula}/>
                <Route path='/disciplinas' component={DashboardDisciplinas}/>
                <Route path='/exercicios' component={DashboardExercicios}/>
                <Route path="/provas" component={ProvasProfessor} />
                <Route path="/exercicios/criar" component={ExerciciosCriar} />
                <Route path="/quiz/listar" component={ListarAtividadeScreen} />
                <Route component={Aula} path='/aula' />
                <Route component={CriarAtividade} path='/quiz/criar' />
                <Route component={Perfil} path='/perfil' />
            </Switch>
        </BrowserRouter>
    )
}
export default Routes;