import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import AddCircleIcon from '@material-ui/icons/AddCircle';

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


function NewDiscipline() {
  const history = useHistory();
  const [redirect, setRedirect] = useState("");
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    institution: ""
  })


  function handleToggle(event) {
    event.preventDefault();
    setOpen(!open);
  }

  function submit(event) {
    event.preventDefault();

    const { name, institution } = formData;

    api.post('dashboard/disciplina/', { name, institution}).then((response) => {
      alert("Cadastrado com Sucesso")
      history.push("dashboard");

    }).catch((error) => {
      console.log(error);
    });
  }

  function MudaInput(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value })
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
  return (
    <>
      <Link className="card add text-center" onClick={handleToggle}>
        <AddCircleIcon /><h3 className="adicionar_texto"> &nbsp;Adicionar</h3>
      </Link>
      <Dialog open={open} onClose={handleToggle} compo aria-labelledby="form-dialog-disciplina">
        <div className="o-center o-espaco-padrao o-text-center">
          <DialogTitle id="form-dialog-disciplina">Entrar</DialogTitle>
          <DialogContent>
            <div className={useStyles.root}>
              <div>
                <TextField
                  id="nomeDisciplina"
                  label="Nome da Disciplina"
                  variant="outlined"
                  name="email"
                  onChange={MudaInput}
                />
                <br />
                <br />
                <TextField
                  id="instituicao"
                  label="Instituição"
                  variant="outlined"
                  name="Instituição"
                  onChange={MudaInput}
                />
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <div className="c-botao o-center">
              <Button
                className="o-btn green"
                variant="contained"
                color="primary"
                onClick={submit}
              >
                Salvar
                 </Button>

              <Button
                className="o-btn green"
                variant="contained"
                color="primary"
              >
                Cancelar
                 </Button>
            </div>
          </DialogActions>
        </div>
      </Dialog>
    </>

  )
}
export default NewDiscipline;