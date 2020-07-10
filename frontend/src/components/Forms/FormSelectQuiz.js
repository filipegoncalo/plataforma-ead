import React, { Component } from 'react';

import {
    MenuItem,
    InputLabel,
    Select
} from '@material-ui/core';

export default class FormSelectQuiz extends Component{
    state = {
        form: {
            title: '',
            description: '',
            categoria: '',
            selecao: ''
        }
    }

    handleChangeCategoria = categoria => ({target: {value}}) => {
        this.setState({
            form: {
                ...this.state.categoria,
                [categoria]: value
            }
        })
    }

    handleChangeSelecao = selecao => ({target: {value}}) => {
        this.setState({
            form: {
                ...this.state.selecao,
                [selecao]: value
            }
        })
    }

    render(){
        const { form: {title, description, categoria, selecao} } = this.state
    
        return(
            <div>
                <form>
                    <InputLabel id="demo-simple-select-outlined-label">Categoria</InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={this.categoria}
                      onChange={this.handleChangeCategoria}
                      label="Categoria"
                    >
                    <MenuItem value={10}>Exercício</MenuItem>
                    <MenuItem value={20}>Quiz</MenuItem>
                    </Select>

                    <br />
                    
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={this.selecao}
                      onChange={this.handleChangeSelecao}
                      label="Seleção"
                    >
                    <MenuItem value="">
                        Nenhuma seleção disponível
                    </MenuItem>
                    </Select>
                </form>  
            </div>
        )
    }
}
