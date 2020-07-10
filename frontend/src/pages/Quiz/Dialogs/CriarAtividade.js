import React, { Component } from 'react';

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle
} from '@material-ui/core';

import FormCriarAtividade from '../../../components/FormCriarAtividade';


export default class CriarAtividade extends Component {
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
                        <FormCriarAtividade />
                        <br />
                    </DialogContent>
                    <DialogActions>
                        <Button
                          variant="contained"
                          color="primary"
                        >
                            Criar
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