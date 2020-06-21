import React, { Component } from 'react';

import {
    Button,
    FormControl,
    FormHelperText,
    MenuItem,
    InputLabel,
    Select,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@material-ui/core';
import CustomDialog from '../../../components/Dialog';


export default class CriarQuiz extends Component {
    state = {
        open: false,
        form: {
            title: '',
            description: '',
            categoria: ''
        }
    }

    handleToggle = () => {
        this.setState({
            open: !this.state.open
        });
    }

    handleChange = categoria => ({target: {value}}) => {
        this.setState({
            form: {
                ...this.state.categoria,
                [categoria]: value
            }
        })
    }

    render() {
        const { open, form: {title, description, categoria} } = this.state

        return (
            <div>
                <Button
                variant="contained"
                color="primary"
                onClick={this.handleToggle}
                >
                    Criar
                </Button>
                <Dialog open={open} onClose={this.handleToggle} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Selecione uma atividade</DialogTitle>
                    <DialogContent>
                    <FormControl variant="outlined" className={React.classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Categoria</InputLabel>
                        <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={categoria}
                        onChange={this.handleChange}
                        label="Categoria"
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Exercício</MenuItem>
                        <MenuItem value={20}>Quiz</MenuItem>
                        </Select>
                    </FormControl>
                        <br />
                        <Button
                        variant="contained"
                        color="primary">
                            Abrir
                        </Button>
                    </DialogContent>
                    <DialogActions>
                        <Button
                        variant="contained"
                        onClick={this.handleToggle}
                        color="primary">
                            Cancelar
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}