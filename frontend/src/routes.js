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
import QuizProfessor from './pages/QuizProfessor';

import CriarExercicio from './pages/CriarExercicio';
import CriarProva from './pages/CriarProva';
import CriarQuiz from './pages/CriarQuiz';
//import CriarAtividade from './components/CriarAtividade';
import ListarAtividadeScreen from './pages/ListarAtividadeScreen';

import Perfil from './pages/Perfil';
import LinkTurma from './pages/LinkTurma';
import Avaliacao from './pages/Avaliacao';


function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} exact/>
                <Route path='/cadastro' component={Cadastro}/>
                <Route path='/dashboard' component={Dashboard}/>
                <Route path='/disciplinas' component={DashboardDisciplinas}/>
                <Route path='/exercicios' component={DashboardExercicios}/>
                <Route path="/provas" component={ProvasProfessor} />
                <Route path="/quiz" component={QuizProfessor} />

                <Route path="/exercicios-criar" component={CriarExercicio} />
                <Route path='/quiz-criar' component={CriarQuiz} />
                <Route path='/prova-criar' component={CriarProva} />

                <Route path="/quiz-listar" component={ListarAtividadeScreen} />
                
                <Route component={Aula} path='/aula' />
                <Route component={Perfil} path='/perfil' />
                <Route component={LinkTurma} path='/turma' />
                <Route component={Avaliacao} path='/correcao' />
            </Switch>
        </BrowserRouter>
    )
}
export default Routes;