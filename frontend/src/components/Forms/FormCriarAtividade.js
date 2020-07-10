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
                    <InputLabel id="demo-simple-select-outlined-label">Categoria</InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={this.categoria}
                      onChange={this.handleChangeCategoria}
                      label="Categoria"
                    >
                    <MenuItem value={10}>Exercício Múltipla Escolha</MenuItem>
                    <MenuItem value={20}>Exercício Dissertativo</MenuItem>
                    <MenuItem value={30}>Quiz</MenuItem>
                    </Select>
                </form>  
            </div>
        )
    }
}
