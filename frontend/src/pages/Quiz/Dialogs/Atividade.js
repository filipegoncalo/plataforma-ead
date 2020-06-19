import React, { Component } from 'react';

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@material-ui/core';
import CustomDialog from '../../../components/Dialog';

import CriarQuiz from './CriarAtividade'


export default class Quiz extends Component {
    state = {
        open: false
    }

    handleToggle = () => {
        this.setState({
            open: !this.state.open
        });
    }    

    render() {
        const { open } = this.state;

        return (
            <div>
                <Button
                variant="contained"
                color="primary"
                onClick={this.handleToggle}
                >
                    Atividade
                </Button>
                <Dialog open={open} onClose={this.handleToggle} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Atividades</DialogTitle>
                    <DialogContent>
                        <Button
                        variant="contained"
                        color="primary"
                        >
                            Criar
                        </Button>
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

