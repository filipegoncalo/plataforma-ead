import React,{useEffect, useState} from 'react';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import DashBoard from '../../components/Main/index';
import ScreenShareIcon from '@material-ui/icons/ScreenShare';
import HomeIcon from '@material-ui/icons/Home';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitationOutlined';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import { Redirect } from "react-router-dom";
import api from '../../services/api';
const items = [
    { name: 'home', label: 'Home', icone: <HomeIcon style={{ color: 'white'}}/>, link: '/dashboard'  },
    { name: 'iniciarAula', label: 'Iniciar aula', icone: <ScreenShareIcon style={{ color: 'white'}}/>, link: '/aula' },
    { name: 'cronograma', label: 'Cronograma', icone: <InsertInvitationIcon style={{ color: 'white'}}/>, link: '#' },
    { name: 'perfil', label: 'Perfil', icone: <PlaylistAddCheckIcon  style={{ color: 'white'}}/>, link: '/perfil' },
]

const tipo="";
const token =localStorage.getItem("token");
const nextScreen="/disciplinas";

function DashboardProfessor() {
    
    const [flag, setFlag] = useState(false);
    const [disciplina,setDisciplina]=useState([]);
    

    const config = {
        headers: { 
            'Authorization': `Bearer ${token}`,
            'Access-Control-Allow-Origin': '*',
            crossDomain: true
         }
      }
        function handleFlag(){
            setFlag(!flag);
        }

        useEffect(()=>{
            api.get("dashboard/disciplinas",config).then((response)=>{
                const {status,data}=response;
                setDisciplina(response.data.data);
            
            }).catch((e)=>{
                console.log(e)
                return "Nenhuma disciplina Cadastrada";
            });

        },[flag]);


    if(localStorage.getItem("token") && localStorage.getItem("token").length>0 ){
        return (
            <div>
                <div className="row">
                    <MenuLateral items={items}/>
                    <DashBoard  dados={disciplina} tipo={tipo} flagFunction={handleFlag} nextScreen={nextScreen}/>
                </div>
            </div>
        )
   }
    return (<Redirect to="/"/>);


};

export default DashboardProfessor;