import React from 'react';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import DashBoard from '../../components/Main/index';
import ScreenShareIcon from '@material-ui/icons/ScreenShare';
import HomeIcon from '@material-ui/icons/Home';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitationOutlined';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';

const items = [
    { name: 'home', label: 'Home', icone: <HomeIcon style={{ color: 'white'}}/>, link: '#'  },
    { name: 'iniciarAula', label: 'Iniciar aula', icone: <ScreenShareIcon style={{ color: 'white'}}/>, link: '#' },
    { name: 'cronograma', label: 'Cronograma', icone: <InsertInvitationIcon style={{ color: 'white'}}/>, link: '#' },
    { name: 'perfil', label: 'Perfil', icone: <PlaylistAddCheckIcon  style={{ color: 'white'}}/>, link: '#' },
]

const materia = [
    { name: 'Olá Carlos!', link: '#', tipo: ''},
]

const exercicios = [
    { name: 'Matemática', link: '#'},   
    { name: 'Geometria', link: '#'},

]

function DashboardProfessor() {
        return (
            <div>
                <div className="row">
                    <MenuLateral items={items}/>
                    <DashBoard items={materia} atividade={exercicios}/>
                </div>
            </div>
        )
};

export default DashboardProfessor;