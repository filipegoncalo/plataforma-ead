import React from 'react';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import Main from '../../components/Main';
import ScreenShareIcon from '@material-ui/icons/ScreenShare';
import HomeIcon from '@material-ui/icons/Home';
import SchoolIcon from '@material-ui/icons/School';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitationOutlined';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';

const items = [
    { name: 'home', label: 'Home', icone: <HomeIcon style={{ color: 'white'}}/>, link: '#'  },
    { name: 'iniciarAula', label: 'Iniciar aula', icone: <ScreenShareIcon style={{ color: 'white'}}/>, link: '#' },
    { name: 'turmas', label: 'Turmas', icone: <SchoolIcon style={{ color: 'white'}}/>, link: '#' },
    { name: 'agendarAula', label: 'Agendar aulas', icone: <InsertInvitationIcon style={{ color: 'white'}}/>, link: '#' },
    { name: 'quizz', label: 'Quizz', icone: <EmojiEventsIcon style={{ color: 'white'}}/>, link: '#' },
    { name: 'exercicios', label: 'Exercícios', icone: <PlaylistAddCheckIcon  style={{ color: 'white'}}/>, link: '#' },
    { name: 'provas', label: 'Provas', icone: <PlaylistAddCheckIcon  style={{ color: 'white'}}/>, link: '#' },
]

const materia = [
    { name: 'Matemática', link: '#', tipo: 'Exercícios'},
]

const exercicios = [
    { name: 'Função - Lista 1', link: '#'},   
    { name: 'Função - Lista 2', link: '#'},
    { name: 'Função - Lista 3', link: '#'},   
    { name: 'Função - Lista 4', link: '#'},
    { name: 'Função - Lista 5', link: '#'},   
]

function Exercicios() {
        return (
            <div>
                <div className="row">
                    <MenuLateral items={items}/>
                    <Main items={materia} atividade={exercicios}/>
                </div>
            </div>
        )
};

export default Exercicios;