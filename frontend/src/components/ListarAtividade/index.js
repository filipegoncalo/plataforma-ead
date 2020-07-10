import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/setup.css';
import Logo from '../../assets/logoPreto.png';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {AddCircleSharp as Add, Create} from '@material-ui/icons/';

function ListarAtividade({info}) {
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

             <div className="o-content-fundo o-gray">  
                <div className="o-inside o-purple">
                    <h3 className="o-title-3 purple o-text-center">{info.conteudo}</h3>
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
                                <Button variant="contained" className="o-btn blue"  startIcon={<Add />}>Aplicar a uma turma</Button>
                            </Grid>
                        ))}
                </div>

            </div>
            <Button variant="contained" className="o-btn blue o-position-button"  startIcon={<Create/>}>Adicionar Pergunta</Button>

         </div>
    )
};
export default ListarAtividade;
