import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/setup.css';
import './styles.css';
import Logo from '../../assets/logoPreto.png';
import Vip from '../../assets/vip.png';
import SchoolIcon from '@material-ui/icons/School';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import imgStudy from '../../assets/box-study.png';

function Main({items, atividade}) {
    return(
        <div className="o-main">
            <div className="o-breadcrumb">
                <div className="tituloMateria">
                    {items.map(({ name, link, tipo, ...rest }) => (
                    <div>
                        <h1>{name}</h1>                
                        <h2>{tipo}</h2>
                    </div>
                    ))}
    
                </div>
                <div className="logoPreto">
                    <img align="right" className="logoPreto" src={Logo}/>
                </div>
            </div>
            <div className="o-pt-2">
                <div className="o-box-conteudo">
                    {atividade.map(({ name, link, ...rest }) => (
                    <Link to={link} style={{backgroundImage:`url(${imgStudy})`}} className="card text-center">
                        <h3 >{name}</h3>
                    </Link>
                    ))}

                    <Link className="card add text-center" to="/">
                        <AddCircleIcon /><h3 className="adicionar_texto"> &nbsp;Adicionar</h3>
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