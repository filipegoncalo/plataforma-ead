import React, { Component } from 'react';

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@material-ui/core';

import FormInserirQuiz from '../../../components/Forms/FormInserirQuiz';


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
                    <div className="o-center o-espaco-padrao o-text-center">
                        <DialogTitle id="form-dialog-title">Quiz</DialogTitle>
                    </div>
                    <DialogContent>
                        <FormInserirQuiz />
                        <br />
                    </DialogContent>
                    <DialogActions>
                    <div className="c-botao o-center">
                        <Button
                          variant="contained"
                          color="primary"
                          className="o-btn green"
                        >
                            Finalizar
                        </Button>
                        <Button
                          variant="contained"
                          onClick={this.handleToggle}
                          color="primary"
                          className="o-btn blue"
                        >
                            Cancelar
                        </Button>
                    </div>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
} 