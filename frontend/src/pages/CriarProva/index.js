import React from 'react';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import CriarAtividade from '../../compo../../components/CriarAtividade';
import ScreenShareIcon from '@material-ui/icons/ScreenShare';
import HomeIcon from '@material-ui/icons/Home';
import SchoolIcon from '@material-ui/icons/School';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitationOutlined';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
const items = [
    { name: 'home', label: 'Home', icone: <HomeIcon style={{ color: 'white'}}/>, link: '/dashboard' },
    { name: 'iniciarAula', label: 'Iniciar aula', icone: <ScreenShareIcon style={{ color: 'white'}}/>, link: '/aula' },
    { name: 'turmas', label: 'Turmas', icone: <SchoolIcon style={{ color: 'white'}}/>, link: '/disciplinas' },
    { name: 'agendarAula', label: 'Agendar aulas', icone: <InsertInvitationIcon style={{ color: 'white'}}/>, link: '#' },
    { name: 'quizz', label: 'Quizz', icone: <EmojiEventsIcon style={{ color: 'white'}}/>, link: '#' },
    { name: 'exercicios', label: 'Exercícios', icone: <PlaylistAddCheckIcon  style={{ color: 'white'}}/>, link: '/exercicios' },
    { name: 'provas', label: 'Provas', icone: <PlaylistAddCheckIcon  style={{ color: 'white'}}/>, link: '/provas' },
];

const info= {
    materia:"Matemática",
    tipo:"Prova",
    conteudo:"Função - Lista 1",
    action:"url"
}

function CriarProva() {
        return (
            <div>
                <div className="row">
                    <MenuLateral items={items}/>
                    <CriarAtividade info={info}/>
                </div>
            </div>
        )
}; 

export default CriarProva;