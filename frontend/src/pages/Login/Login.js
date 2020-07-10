import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

//redirecionamento
import { useHistory, Redirect } from "react-router-dom";

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


function Login() {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })


  function handleToggle() {
    setOpen(!open);
  }

  function submit(event) {
    const { email, password } = formData;
    if(email && password){
      api.post('auth/sign-in', { "email": email, "password": password }).then((response) => {
        const { data } = response;
        const { token } = data.metadata;
        const {first_name, last_name } = data.data;

        localStorage.setItem('first_name', first_name);
        localStorage.setItem('last_name', last_name);
        localStorage.setItem('token', token);
        history.push("dashboard");

      }).catch((error) => {
        console.log(error);
      });
    }
    else{
      alert("Preencha todos os Campos");
    }
  }

  function MudaInput(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value })
  }


  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

  if (localStorage.getItem("token") && localStorage.getItem("token").length > 0) {
    return (<Redirect to="/dashboard" />);
  }
  else {
    return (
      <div>
        <div className="c-botao">
          <Button
            className="o-btn blue"
            variant="contained"
            color="primary"
            onClick={handleToggle}
          >
            Entrar
           </Button>
        </div>
        <Dialog open={open} onClose={handleToggle}  aria-labelledby="form-dialog-title">
          <div className="o-center o-espaco-padrao o-text-center o-tamanho-tela-login">
            <DialogTitle id="form-dialog-title" className="o-custom-cor-texto">Login</DialogTitle>
            <DialogContent>
              <div className={useStyles.root}>
                <div>
                  <TextField
                    id="email"
                    label="E-mail"
                    variant="outlined"
                    name="email"
                    className="o-tamanho-input-modal"
                    onChange={MudaInput}
                  />
                  <br />
                  <br />
                  <TextField
                    id="senha"
                    label="Senha"
                    type="password"
                    variant="outlined"
                    name="password"
                    className="o-tamanho-input-modal"
                    onChange={MudaInput}
                  />
                </div>
              </div>
            </DialogContent>
            <br></br>
            <DialogActions>
              <div className="c-botao o-center">
                <Button
                  className="o-btn green o-tamanho-botao-login"
                  variant="contained"
                  color="primary"
                  onClick={submit}
                >
                  Entrar
                 </Button>
              </div>
            </DialogActions>
            <br></br>
            <div>
              <p className="o-text-4 o-size-pagina-login">Ainda não se cadastrou? <Link to='/cadastro'>Cadastro</Link></p>
            </div>
          </div>
        </Dialog>
      </div>

    )
  }
}
export default Login;