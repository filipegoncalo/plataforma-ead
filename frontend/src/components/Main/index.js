import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/setup.css';
import './main.css';
import Logo from '../../assets/logoPreto.png';
import Vip from '../../assets/vip.png';
import SchoolIcon from '@material-ui/icons/School';
import AddCircleIcon from '@material-ui/icons/AddCircle';

function DashBoard({items, atividade}) {
    return(
        <div className="row col">
            <div className="col tituloMateria">
                {items.map(({ name, link, tipo, ...rest }) => (
                <div>
                    <h1>{name}</h1>               
                    <h2>{tipo}</h2>
                </div>
                ))}
 
            </div>

            <div className="col logoPreto">
                <img align="right" className="logoPreto" src={Logo}/>
            </div>

            <div className="row ">
                <div className="">
                {atividade.map(({ name, link, ...rest }) => (
                <div type="button" className="card text-center" style={{ width: '20em' }}>
                    <br></br><br></br><br></br>
                    <div className="card-body">
                        <h3>{name}</h3>
                    </div>
                </div>
                ))}

                <div type="button" className="card card_adicionar text-center" style={{ width: '20em' }}>
                    <br></br><br></br><br></br>
                    <div className="card-body">
                        <AddCircleIcon  style={{ color: 'white', fontSize: 30}}/><a>  Adicionar</a>
                    </div>
                </div>

                </div>
                <div className="div-wrapper">
                    <img className="imagem_vip" src={Vip}/>
                </div>
            </div>
        </div>
    )
};
export default DashBoard;