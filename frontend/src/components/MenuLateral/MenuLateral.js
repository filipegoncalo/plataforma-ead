import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import imgperfil from '../../assets/image7.png';
import '../../assets/setup.css';
import '../MenuLateral/MenuLateral.css';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitationOutlined';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

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
                                <li className="nav-item">   
                                    <a className="nav-link" href= {link}>
                                        {icone} {label}
                                    </a>
                                </li>
                        ))}
                    </ul>
                </div>

                <div className="">
                        <li className="nav flex-column botao-sair">
                            <a className="nav-link " href="#">
                            <ExitToAppIcon style={{ color: 'white'}}/>   Sair
                            </a>
                        </li>
                </div>
            </div>

    )
};

export default MenuLateral;