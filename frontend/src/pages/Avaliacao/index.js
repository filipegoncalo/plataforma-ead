import React from 'react';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import ListarAtividade from '../../compo../../components/ListarAtividade';
import ScreenShareIcon from '@material-ui/icons/ScreenShare';
import HomeIcon from '@material-ui/icons/Home';
import SchoolIcon from '@material-ui/icons/School';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitationOutlined';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import {PanToolRounded,School, Star,AttachFile,MenuBook, AddCircleSharp as Add} from '@material-ui/icons/';
import Person from '../../assets/person.jpg';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import MenuRight from '../../components/MenuRight';
import {CheckCircle,Error} from '@material-ui/icons'
import Revisar from '../../components/Revisar';

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
    avaliacao:"Avaliação 1",
    escola:"E.E. Estevam Placêncio - 5ºA - Manhã",
    nome:"Amanda Oliveira Pereira",
    chamada:"1",
    nota:"1.0",
    dissertativa:[
        {
            id:"1",
            pergunta:"O famoso matemático Bhaskara nasceu em qual país?",
            resposta:"Romênia"
        },
        
    ],
    alternativa:[
        {
            id:"1",
            pergunta:"O famoso matemático Bhaskara nasceu em qual país?",
            resposta:"Romênia"
        }
    ]

}
const alunos=[
    {
        id:"1",
        nome:"Amanda Pereira Oliveira",
        icone:<CheckCircle className="green"/>
    },
    {
        id:"2",
        nome:"Roberto da Silva Costa",
        icone:<Error className="orange"/>
    }
]

function Avaliacao() {
        return (
            <div>
                <div className="row">
                    <MenuLateral items={items}/>
                    <Revisar info={info}></Revisar>
                    <MenuRight alunos={alunos}></MenuRight>
                </div>
            </div>
        )
}; 

export default Avaliacao;
