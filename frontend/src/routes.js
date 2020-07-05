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
import QuizCriar from './pages/QuizCriar';


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
                <Route path="/quiz/criar" component={QuizCriar} />
                <Route component={Aula} path='/aula' />
                
                </Switch>
        </BrowserRouter>
    )
}
export default Routes;