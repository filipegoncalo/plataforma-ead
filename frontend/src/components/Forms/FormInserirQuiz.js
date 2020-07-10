import React, { Component } from 'react';

import {
    InputLabel,
    TextField
} from '@material-ui/core';

import './FormInserirQuiz.css'

export default class FormInserirQuiz extends Component{
    state = {
        form: {
            title: '',
            description: '',
            categoria: ''
        }
    }

    handleChange = categoria => ({target: {value}}) => {
        this.setState({
            form: {
                ...this.state.categoria,
                [categoria]: value
            }
        })
    }

    render(){
        const { form: {title, description, categoria} } = this.state

        return(
            <div>
                <form>
                    <div>
                        <TextField
                          id="outlined-basic"
                          label="Inserir pergunta"
                          variant="outlined"
                        />
                    </div>
                    <br />
                    <div>
                        <InputLabel id="demo-simple-select-outlined-label">A</InputLabel>
                        <TextField
                          className="respostaCorreta"
                          id="outlined-basic"
                          label="Inserir resposta correta"
                          variant="outlined"
                        />
                    </div>
                    <br />
                    <div>
                        <InputLabel id="demo-simple-select-outlined-label">B</InputLabel>
                        <TextField
                          className="respostaIncorreta"
                          id="outlined-basic"
                          label="Inserir resposta incorreta"
                          variant="outlined"
                        />
                    </div>
                    <br />
                    <div>
                        <InputLabel id="demo-simple-select-outlined-label" className="label">C</InputLabel>
                        <TextField
                          className="respostaIncorreta"
                          id="outlined-basic"
                          label="Inserir resposta incorreta"
                          variant="outlined"
                        />
                    </div>
                </form>  
            </div>
        )
    }
}