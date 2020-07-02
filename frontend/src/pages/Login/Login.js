import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


export default class Login extends Component {
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

        const useStyles = makeStyles((theme) => ({
            root: {
              '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '25ch',
              },
            },
          }));

        return (
            <div>
                <div className="c-botao">
                    <Button
                    className="o-btn blue"
                    variant="contained"
                    color="primary"
                    onClick={this.handleToggle}
                    >
                        Entrar
                    </Button>
                </div>
                <Dialog open={open} onClose={this.handleToggle} aria-labelledby="form-dialog-title">
                    <div className="o-center o-espaco-padrao o-text-center">
                        <DialogTitle id="form-dialog-title">Entrar</DialogTitle>
                        <DialogContent>
                            <form className={useStyles.root}>
                                <div>
                                    <TextField
                                    id="outlined-basic"
                                    label="E-mail"
                                    variant="outlined"
                                    />
                                    <br />
                                    <br />
                                    <TextField
                                    id="outlined-password-input"
                                    label="Senha"
                                    type="password"
                                    variant="outlined"
                                    />
                                </div>
                            </form>
                        </DialogContent>
                        <DialogActions>
                            <div className="c-botao o-center">
                                <Button
                                className="o-btn green"
                                variant="contained"
                                color="primary"
                                >
                                    <Link to='/dashboard'>
                                        Entrar
                                    </Link>
                                </Button>
                            </div>
                        </DialogActions>
                        <div>
                            <p>Ainda não se cadastrou? <Link to='/cadastro'>Cadastro</Link></p>
                        </div>
                    </div>
                </Dialog>
            </div>
        )
    }
}