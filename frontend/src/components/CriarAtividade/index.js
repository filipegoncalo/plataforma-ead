import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/setup.css';
import Logo from '../../assets/logoPreto.png';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {AddCircleSharp as Add,CancelSharp, Create,SaveSharp} from '@material-ui/icons/';


function ListarAtividade({info}) {
    const {lista}=info;
    return(
         <div className="o-main">
            <div className="o-breadcrumb o-relative o-pb-2">
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

             <form className="o-content-fundo o-white" action={info.action}>  
                <div className="o-inside o-blue">

                    <div className="o-relative o-pb-2">
                        <TextField  label="Nome do Quiz" className="o-custom-atividade o-ml-5" variant="outlined"  />
                    </div>

                    <div className="o-relative o-pb-2">
                        <span className="u-number">1.</span>
                        <TextField  label="Inserir pergunta" className="o-custom-atividade o-ml-5" variant="outlined"  />
                    </div>

                    <div className="o-relative o-pb-2">
                        <span className="u-number">A.</span>
                        <TextField  label="Inserir resposta correta" className="o-custom-atividade o-ml-5 u-correct" variant="outlined"  />
                    </div>

                    <div className="o-relative o-pb-2">
                        <span className="u-number">B.</span>
                        <TextField  label="Inserir resposta incorreta" className="o-custom-atividade o-ml-5 u-incorrect" variant="outlined"  />
                    </div>

                    <div className="o-relative o-pb-2">
                        <span className="u-number">C.</span>
                        <TextField  label="Inserir resposta incorreta" className="o-custom-atividade o-ml-5 u-incorrect" variant="outlined"  />
                    </div>
                        
                </div>
                <Button variant="contained" type="submit" className="o-btn blue o-ml-6"  startIcon={<Add/>}>Adicionar pergunta</Button>
                <div className="o-position-button">
                    <Button variant="contained" type="button" className="o-btn blue o-mr-5"  startIcon={<CancelSharp/>}>Cancelar</Button>
                    <Button variant="contained" type="button" className="o-btn green"  startIcon={<SaveSharp/>}>Salvar</Button>
                </div>
            </form>

         </div>
    )
};
export default ListarAtividade;
