import React, {useState, useEffect} from 'react';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import DashBoard from '../../components/Main/index';
import ScreenShareIcon from '@material-ui/icons/ScreenShare';
import HomeIcon from '@material-ui/icons/Home';
import SchoolIcon from '@material-ui/icons/School';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitationOutlined';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import api from '../../services/api';
import {useHistory} from 'react-router';

const items = [
    { name: 'home', label: 'Home', icone: <HomeIcon style={{ color: 'white'}}/>, link: '/dashboard'  },
    { name: 'iniciarAula', label: 'Iniciar aula', icone: <ScreenShareIcon style={{ color: 'white'}}/>, link: '/aula' },
    { name: 'turmas', label: 'Turmas', icone: <SchoolIcon style={{ color: 'white'}}/>, link: '/disciplinas' },
    { name: 'agendarAula', label: 'Agendar aulas', icone: <InsertInvitationIcon style={{ color: 'white'}}/>, link: '#' },
    { name: 'quizz', label: 'Quizz', icone: <EmojiEventsIcon style={{ color: 'white'}}/>, link: '/quiz' },
    { name: 'exercicios', label: 'Exercícios', icone: <PlaylistAddCheckIcon  style={{ color: 'white'}}/>, link: '/exercicios' },
    { name: 'provas', label: 'Provas', icone: <PlaylistAddCheckIcon  style={{ color: 'white'}}/>, link: '/provas' },
    { name: 'correções', label: 'Correções', icone: <PlaylistAddCheckIcon  style={{ color: 'white'}}/>, link: '/correcao' },
]
const tipo="Turmas";

function Disciplinas(navega) {
    const history = useHistory();
    const [materia, setMateria]=useState();
    const nextScreen="/perfil";
    const [flag, setFlag] = useState(false);

    if(navega.location.state)
    {
        const {item}=navega.location.state;
        localStorage.setItem('id_discipline',item.id)
        localStorage.setItem('name_discipline',item.name)
    }

    const config = {
        headers: { 
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Access-Control-Allow-Origin': '*',
            crossDomain: true,
            'discipline_id':localStorage.getItem('id_discipline')
         }
        }

        function handleFlag(){
            setFlag(!flag);
        }

        useEffect(()=>{
            api.get('/dashboard/disciplina/turmas',config).then((response) => {
                localStorage.setItem("ID",response.data.data.id);
                setMateria(response.data.data);
            }).catch((error) => {
            });

        },[flag]);

    
    return (
        <div>
            <div className="row">
                <MenuLateral items={items}/>
                <DashBoard dados={materia}  tipo={tipo} flagFunction={handleFlag} nextScreen={nextScreen}/>
            </div>
        </div>
    )
};

export default Disciplinas;