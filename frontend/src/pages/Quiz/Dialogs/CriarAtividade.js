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
        const { open } = this.state

        return (
            <div>
                <Button
                variant="outlined"
                color="primary"
                onClick={this.handleToggle}
                >
                    Open form dialog
                </Button>
                <Dialog open={open} onClose={this.handleToggle} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Atividades</DialogTitle>
                    <DialogContent>
                        <Button
                        variant="outlined"
                        color="primary"
                        >
                            Criar
                        </Button>
                        <Button
                        variant="outlined"
                        color="primary">
                            Abrir
                        </Button>
                    </DialogContent>
                    <DialogActions>
                        <Button
                        variant="outlined"
                        onClick={this.handleToggle}
                        color="primary">
                            Cancel
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

