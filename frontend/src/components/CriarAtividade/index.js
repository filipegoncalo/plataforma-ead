import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/setup.css';
import './styles.css';
import Logo from '../../assets/logoPreto.png';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
//import Icon from '@material-ui/core/Icon';
import {AddCircleSharp as Add, Create} from '@material-ui/icons/';

function CriarAtividade({info}) {
    const {lista}=info;
    return(
         <div className="o-main">
            <div className="o-breadcrumb o-pb-2">
                <div className="tituloMateria">
                    <div>
                        <h1>{info.materia}</h1>                
                        <h2>{info.tipo}</h2>
                    </div>
                </div>
                <div className="logoPreto">
                    <img align="right" className="logoPreto" src={Logo}/>
                </div>
         </div>

             <div className="o-content-gray"> 
                <div className="o-inside">
                    <h3 className="o-title-3 o-text-center">{info.conteudo}</h3>
                        {lista.map((item) => (
                            <Grid key={Math.random()+""} className="o-row o-pt-2">

                                <Grid xs={7} >
                                    <h3 className="o-title">{item.icone} {item.tarefa}</h3>
                                </Grid>

                                <Grid  xs={5}>
                                    <h3 className="o-title">{item.col2}</h3>
                                </Grid>
                                {(item.informacoes).map((inf) => (
                                    <Link className="o-row o-itens" to="/" xs={12}>
                                        <Grid xs={7} className="o-item">
                                                {inf.instituicao}
                                        </Grid>

                                        <Grid  xs={5} className="o-item">
                                            {inf.text}
                                        </Grid>    
                                    </Link>
                                ))}
                                <Button variant="contained" className="o-btn blue"  startIcon={<Add color="red" />}>Aplicar a uma turma</Button>
                            </Grid>
                        ))}
                </div>

            </div>
            <Button variant="contained" className="o-btn blue"  startIcon={<Create />}>Editar</Button>

         </div>
    )
};
export default CriarAtividade;