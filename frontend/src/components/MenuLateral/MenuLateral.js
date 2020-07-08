import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link } from 'react-router-dom';
import imgperfil from '../../assets/image7.png';
import '../../assets/setup.css';
import '../MenuLateral/MenuLateral.css';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitationOutlined';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {useHistory} from 'react-router';

var data = new Date();
var mes  = data.getMonth()
var hora = data.getHours();
var min  = data.getMinutes();
var dia  = data.getDate();
var dias = new Array(
    'Dom','Seg','Ter','Qua','Qui','Sex','Sáb'
   );
var str_data = dia + '/' + (mes+1);
var str_hora = hora + ':' + min;

// Menu Lateral - 7 Campos

function MenuLateral({ items }){
    const history = useHistory();

    function handleSair(event){
        event.preventDefault();
        localStorage.clear();
        history.push("/");
    }

    return(
            <div className="o-menu bg-color menuComponente ">
                <nav className="AvatarTexto">
                    <br></br>
                    <img align="left" src={imgperfil} className="col-md-4 borderimg"/>
                    <InsertInvitationIcon fontSize="small" style={{ color: 'white'}}/>
                    <a>  {dias[data.getDay()]}  {str_data}</a>
                    <br></br>
                    <a>Próxima Aula</a>
                    <br></br>
                    <AccessTimeIcon fontSize="small" style={{ color: 'white'}} />
                    <a>{str_hora}</a>
                </nav>
                <br></br> 
                <br></br>
                <div className="menuItem">
                    <ul className="nav flex-column">               
                        {items.map(({ label, name, icone, link, ...rest }) => (     
    
                            <li key={Math.random()+""} className="nav-item">   
                            <Link to={link} className="nav-link" style={{ textDecoration: 'none'}}>        
                                    {icone} {label}
                            </Link> 
                            </li>

                        ))}
                    </ul>
                        <li className="nav flex-column botao-sair">
                            <Link onClick={handleSair} className="nav-link ">
                               <ExitToAppIcon style={{ color: 'white'}}/>   Sair
                            </Link>
                        </li>
                </div>
            </div>

    )
};

export default MenuLateral;