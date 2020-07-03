import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/setup.css';
import './styles.css';
import Logo from '../../assets/logoPreto.png';
import Vip from '../../assets/vip.png';
import SchoolIcon from '@material-ui/icons/School';
import AddCircleIcon from '@material-ui/icons/AddCircle';


function Main({items, atividade}) {
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
                <Link to={link}>
                    <div type="button" className="card text-center" style={{ width: '20em' }}>
                        <br></br><br></br>
                        <div className="card-body">
                                <h3>{name}</h3>
                        </div>
                    </div>
                </Link>
                ))}

                <Link to="/">
                    <div type="button" className="card card_adicionar text-center" style={{ width: '20em' }}>
                        <br></br><br></br>
                        <div className="card-body">
                            <AddCircleIcon style={{ color: 'white', fontSize: 25}}/><h3 className="adicionar_texto"> &nbsp;Adicionar</h3>
                        </div>
                    </div>
                </Link>

                </div>
                <div className="div-wrapper">
                    <img className="imagem_vip" src={Vip}/>
                </div>
            </div>
        </div>
    )
};
export default Main;