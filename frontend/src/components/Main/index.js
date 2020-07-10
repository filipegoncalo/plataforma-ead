import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/setup.css';
import './styles.css';
import Logo from '../../assets/logoPreto.png';
import Vip from '../../assets/vip.png';
import imgStudy from '../../assets/box-study.png';
import NewDiscipline from '../../pages/NewDiscipline';
import {useHistory} from 'react-router';

function Main({dados,flagFunction,tipo,nextScreen}) {
    const history=useHistory();

    function navigation(event,item){
        event.preventDefault();
        history.push("/disciplinas",item);
    }
    
    const nome ="Olá, "+localStorage.getItem("first_name")+" "+localStorage.getItem("last_name");
    return(
        <div className="o-main">
            <div className="o-breadcrumb">
                <div className="tituloMateria">
                    <div>
                        <h1>{nome}</h1>
                        <h2>{tipo}</h2>             
                    </div>
                </div>
                <div className="logoPreto">
                    <img align="right" className="logoPreto" src={Logo}/>
                </div>
            </div>
            <div className="o-pt-2">
                <div className="o-box-conteudo o-purple">
                    {dados && dados.map((item) => (
                    <Link key={Math.random()+""} to={{ pathname: nextScreen, state: { item} }}   style={{backgroundImage:`url(${imgStudy})`}} className="card text-center">
                        <h3 >{item.name}</h3>
                    </Link>
                    ))}
                    <NewDiscipline tipo={tipo} flagFunction={flagFunction}/>
                </div>
                <div className="div-wrapper">
                    <img className="imagem_vip" src={Vip}/>
                </div>
            </div>
        </div>
    )
};
export default Main;