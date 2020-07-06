import React from 'react';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import ListarAtividade from '../../compo../../components/ListarAtividade';
import ScreenShareIcon from '@material-ui/icons/ScreenShare';
import HomeIcon from '@material-ui/icons/Home';
import SchoolIcon from '@material-ui/icons/School';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitationOutlined';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import {MenuBook} from '@material-ui/icons/';
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
    tipo:"Quiz",
    conteudo:"Função - Lista 1",
    lista:[
        {
            tarefa:"Atribuições",icone:<MenuBook></MenuBook>,col2:"Data e horários",
            informacoes:[
                {instituicao:"E.E Lions Clube",text:"04/07/2020 - 19:25"},
                {instituicao:"E.E Lions Clube",text:"04/07/2020 - 19:25"},
                {instituicao:"E.E Lions Clube",text:"04/07/2020 - 19:25"},
            ]
        },
        {
            tarefa:"Atribuições",icone:<MenuBook></MenuBook>,col2:"Data e horários",
            informacoes:[
                {instituicao:"E.E Lions Clube",text:"04/07/2020 - 19:25"},
                {instituicao:"E.E Lions Clube",text:"04/07/2020 - 19:25"},
                {instituicao:"E.E Lions Clube",text:"04/07/2020 - 19:25"},
            ]
        },
    ],

}

function ListarAtividadeScreen() {
        return (
            <div>
                <div className="row">
                    <MenuLateral items={items}/>
                    <ListarAtividade info={info}/>
                </div>
            </div>
        )
}; 

export default ListarAtividadeScreen;