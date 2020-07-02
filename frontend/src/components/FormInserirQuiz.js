import React, { Component } from 'react';

import {
    Button,
    FormControl,
    FormHelperText,
    MenuItem,
    InputLabel,
    Select,
    TextField
} from '@material-ui/core';

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
                    <TextField
                      id="outlined-read-only-input"
                      label="Read Only"
                      defaultValue="Insira uma pergunta"
                      InputProps={{
                          readOnly: true,
                      }}
                    variant="outlined"
                    />
                    <br />
                    <InputLabel id="demo-simple-select-outlined-label">A</InputLabel>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    <br />
                    <InputLabel id="demo-simple-select-outlined-label">A</InputLabel>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </form>  
            </div>
        )
    }
}