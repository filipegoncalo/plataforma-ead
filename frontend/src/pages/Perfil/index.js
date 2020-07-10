import React from 'react';
import  './styles.css';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import ScreenShareIcon from '@material-ui/icons/ScreenShare';
import HomeIcon from '@material-ui/icons/Home';
import SchoolIcon from '@material-ui/icons/School';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitationOutlined';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import {PanToolRounded,School, Star,AttachFile,MenuBook} from '@material-ui/icons/';
import Person from '../../assets/person.jpg';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import MenuRight from '../../components/MenuRight';
import {CheckCircle,Error} from '@material-ui/icons';

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
    nome:"Amanda Oliveira Pereira",
    aulas:"128",
    score:"19.1289",
    trofeus:[
        <School/>,
        <Star />,
        <MenuBook />,
        <AttachFile />
    ],
    lista:[
         {materia:"E.E Lions Clube",data:"04/07/2020 - 19:25"},
    ],

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
const {trofeus,lista}=info;

function Perfil(navega) {
        if(navega.location.state)
        {
            const {item}=navega.location.state;
            localStorage.setItem('name_turma',item.name)
        }
        return (
            <div>
                <div className="row">
                    <MenuLateral items={items}/>
                    <div className="o-main-2">
                        <div className="o-breadcrumb o-relative o-pb-2">
                            <div className="tituloMateria">
                                <h1>{localStorage.getItem("name_discipline")}</h1>                 
                                <h2>{localStorage.getItem("name_turma")}</h2> 
                            </div>
                        </div>
                        <div className="c-area-gray">
                            <div className="o-scroll o-purple">
                                <div className="o-area-img o-purple">
                                    <img src={Person} alt="Foto Perfil"/>
                                    <h2 className="o-pt-2 o-title-3 purple">{info.nome}</h2>
                                </div>
                                <h3 className="o-title"><PanToolRounded/> Participações</h3>
                                <Grid  className="o-row o-pt-2">
                                    <Grid xs={2}></Grid>
                                    <Grid xs={4} >
                                        <div className="o-relative">
                                            <div className="u-bol" data-text={info.aulas}><span>horas de aulas assistidas</span></div>
                                        </div>
                                    </Grid>
                                    <Grid xs={6}>
                                        <div className="o-relative">
                                            <div className="u-bol" data-text={info.score}><span>total de pontos</span></div>
                                        </div>
                                    </Grid>
                                </Grid>
                                <h3 className="o-title o-pt-2"><EmojiEventsIcon/> Troféus</h3>
                                <Grid  className="o-row u-trof o-pt-2 o-text-center">
                                    {trofeus.map((item)=>(
                                        <Grid xs={3} key={Math.random()+""}>{item}</Grid>
                                    ))}
                                </Grid>
                                <h3 className="o-title o-pt-2"><MenuBook/> Avaliações</h3>
                                
                                {lista.map((item) => (
                                <Grid key={Math.random()+""} className="o-row o-pt-2">
                                        <Link className="o-row o-itens" to="/" xs={12}>
                                            <Grid xs={7} className="o-item">
                                                    {item.materia}
                                            </Grid>

                                            <Grid  xs={5} className="o-item">
                                                {item.data}
                                            </Grid>    
                                        </Link>
                                    {/* <Button variant="contained" className="o-btn blue"  startIcon={<Add />}>Aplicar a uma turma</Button> */}
                                </Grid>
                                ))}

                            </div>

                        </div>
                    </div>
                    {/* <ListarAtividade info={info}/> */}
                    <MenuRight alunos={alunos}></MenuRight>
                </div>
            </div>
        )
}; 

export default Perfil;