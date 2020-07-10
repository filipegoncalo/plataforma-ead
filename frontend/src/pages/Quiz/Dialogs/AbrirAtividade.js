import React, { Component } from 'react';

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle
} from '@material-ui/core';

import FormSelectQuiz from '../../../components/Forms/FormSelectQuiz';


export default class CriarQuiz extends Component {
    state = {
        open: false
    }

    handleToggle = () => {
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        const { open } = this.state

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
                        <FormSelectQuiz />
                        <br />
                    </DialogContent>
                    <DialogActions>
                        <Button
                          variant="contained"
                          color="primary"
                        >
                            Abrir
                        </Button>
                        <Button
                          variant="contained"
                          onClick={this.handleToggle}
                          color="primary"
                        >
                            Cancelar
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}