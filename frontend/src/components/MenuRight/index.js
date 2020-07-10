import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/setup.css';
import './styles.css';

import logo2 from '../../assets/logo-2.png';



function MenuRight({ alunos }){
    return(
        <div className="o-menu-right">
            <div className="o-logo-area">
                <img src={logo2} className="logoBranco" alt="Logo"/>
            </div>
            <div className="o-menu-title">Alunos (28)</div>

            <div className="o-espaco-alunos">
                <div className="o-box-alunos ">
                    {
                        alunos.map((item)=>(
                            <Link key={item.id} to="/" className="c-alunos">
                                <div className="o-text-2">{item.nome}</div>
                                {item.icone}
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>

    )
};

export default MenuRight;