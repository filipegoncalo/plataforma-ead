import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import '../../assets/setup.css';
import './styles.css';

import {AddCircleSharp as Add,Create} from '@material-ui/icons/';
import {Button,TextField,InputLabel} from '@material-ui/core/';


function Revisar({ info }){
    return(
    <div className="o-main-2">
        <div className="o-breadcrumb o-relative o-pb-2">
            <div className="tituloMateria">
                <h1>{info.materia}</h1>                 
            </div>
        </div>
        <div className="c-revisar">
            <div className="c-revisar-purple">
                <div className="c-revisar-purple">
                    <h2 className="o-title-3">{info.avaliacao}</h2>
                    <p className="o-text-revisar">{info.escola}</p>
                    <p className="o-text-revisar">{info.chamada} {info.nome}</p>
                    <p className="o-text-revisar">Nota Atual: {info.nota}</p>
                </div>
            </div>
            <form className="o-content-fundo" action={info.action}>  
                <div className="o-inside o-blue">

                    <div className="o-relative o-flex pb-5x">
                        <span className="u-number-revisar">1.</span>
                        <InputLabel  className="u-input">Email address</InputLabel>
                    </div>

                    <div className="o-relative o-pb-2">
                        <span className="u-number">R.</span>
                        <TextField className="u-custom-revisar incorrect orange o-ml-5" variant="filled" defaultValue="Romênia">
                        </TextField>
                        <Add className="u-float-icon orange"/>
                    </div>

                    <div className="o-relative o-flex pb-5x">
                        <span className="u-number-revisar">2.</span>
                        <InputLabel  className="u-input">O que é uma função?</InputLabel>
                    </div>

                    <div className="o-relative o-pb-2">
                        <span className="u-number">R.</span>
                        <TextField multiline rows={2} className="u-custom-revisar incorrect orange o-ml-5" variant="filled" 
                            defaultValue="Função é uma relação entre dois conjuntos A e B, não vazios, de forma que todo elemento de A tem um elemento correspondente em B e vice-versa.">
                        </TextField>
                    </div>
                    <div className="o-row c-notas">
                        <TextField label="Nota" className="o-nota left"  variant="outlined" />

                        <TextField label="Comentar" className="o-nota right"   variant="outlined" />
                    </div>

                </div>
                <div className="o-position-button">
                    <Button variant="contained" type="button" className="o-btn blue o-mr-5"  startIcon={<Create/>}>Revisar</Button>
                </div>
            </form>
        </div>
    </div>

    )
};

export default Revisar;