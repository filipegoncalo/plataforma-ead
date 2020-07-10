import React from 'react';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import ScreenShareIcon from '@material-ui/icons/ScreenShare';
import HomeIcon from '@material-ui/icons/Home';
import SchoolIcon from '@material-ui/icons/School';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitationOutlined';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import Logo from '../../assets/logoPreto.png';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './styles.css';

const items = [
    { name: 'home', label: 'Home', icone: <HomeIcon style={{ color: 'white'}}/>, link: '/dashboard' },
    { name: 'iniciarAula', label: 'Iniciar aula', icone: <ScreenShareIcon style={{ color: 'white'}}/>, link: '/aula' },
    { name: 'turmas', label: 'Turmas', icone: <SchoolIcon style={{ color: 'white'}}/>, link: '/disciplinas' },
    { name: 'agendarAula', label: 'Agendar aulas', icone: <InsertInvitationIcon style={{ color: 'white'}}/>, link: '#' },
    { name: 'quizz', label: 'Quizz', icone: <EmojiEventsIcon style={{ color: 'white'}}/>, link: '#' },
    { name: 'exercicios', label: 'Exercícios', icone: <PlaylistAddCheckIcon  style={{ color: 'white'}}/>, link: '/exercicios' },
    { name: 'provas', label: 'Provas', icone: <PlaylistAddCheckIcon  style={{ color: 'white'}}/>, link: '/provas' },
]

const link="www.google.com.br";
const materia = [
    { name: 'Matemática', link: '#', tipo: 'Provas' },
]

const copyText=()=> {
    var copyText = document.getElementById("copyText");
    copyText.select();
    document.execCommand("copy");
    alert("Link Copiado com sucesso");
  }


function Provas() {
        return (
            <div>
                <div className="row">
                    <MenuLateral items={items}/>
                    <div className="o-main">
                        <div className="o-breadcrumb o-relative o-pb-2">
                            <div className="tituloMateria">
                                <div>
                                    <h1>{materia.nome}</h1>                
                                    <h2>{materia.tipo}</h2>
                                </div>
                            </div>
                            <div className="logoPreto">
                                <img align="right" className="logoPreto" src={Logo}/>
                            </div>
                        </div>
                        <div className="c-box-links">
                            <div className="o-box-link" >
                                <h3 className="u-title-link">Conecte-se com seus amigos</h3>
                                <p className="u-text-link">Copie o link abaixo e compartilhe com seus alunos para que eles tenham acesso a sua aula.</p>
                                <TextField id="copyText" className="u-input-link" label="Link" variant="outlined" defaultValue={link} />
                                <Button  variant="contained" onClick={copyText} className="o-btn green" >Copiar Link</Button>
                            </div>
                            <div className="o-box-link">
                                <h3 className="u-title-link">Excluir turma</h3>
                                <p className="u-text-link">Esta etapata é irreversível! Ao excluir uma turma você perderá todos os dados das atividades realizas, notas, chamadas e agendamentos de aulas. </p>
                                <Button variant="contained" className="o-btn blue" >Excluir</Button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
};

export default Provas;