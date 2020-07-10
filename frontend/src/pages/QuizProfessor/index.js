import React from 'react';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import Main from '../../components/Main';
import ScreenShareIcon from '@material-ui/icons/ScreenShare';
import HomeIcon from '@material-ui/icons/Home';
import SchoolIcon from '@material-ui/icons/School';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitationOutlined';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';


const tipo="Quiz";
const items = [
    { name: 'home', label: 'Home', icone: <HomeIcon style={{ color: 'white'}}/>, link: '/dashboard' },
    { name: 'iniciarAula', label: 'Iniciar aula', icone: <ScreenShareIcon style={{ color: 'white'}}/>, link: '/aula' },
    { name: 'turmas', label: 'Turmas', icone: <SchoolIcon style={{ color: 'white'}}/>, link: '/disciplinas' },
    { name: 'agendarAula', label: 'Agendar aulas', icone: <InsertInvitationIcon style={{ color: 'white'}}/>, link: '#' },
    { name: 'quizz', label: 'Quizz', icone: <EmojiEventsIcon style={{ color: 'white'}}/>, link: '#' },
    { name: 'exercicios', label: 'Exercícios', icone: <PlaylistAddCheckIcon  style={{ color: 'white'}}/>, link: '/exercicios' },
    { name: 'provas', label: 'Provas', icone: <PlaylistAddCheckIcon  style={{ color: 'white'}}/>, link: '/provas' },
]
const nextScreen="/disciplinas";
const materia = [
    { name: 'Matemática', link: '#', tipo: 'Provas' },
]

const exercicios = [
    { name: 'Prova 1 - Função', link: '#'},   
    { name: 'Prova 1 - Função', link: '#'},
]

function QuizProfessor() {
        return (
            <div>
                <div className="row">
                    <MenuLateral items={items}/>
                    <Main items={materia} tipo={tipo} atividade={exercicios} nextScreen={nextScreen}/>
                </div>
            </div>
        )
};

export default QuizProfessor;