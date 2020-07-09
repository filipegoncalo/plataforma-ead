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


function NewDiscipline({flagFunction}) {
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

  const config = {
    headers: { 
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Access-Control-Allow-Origin': '*',
        crossDomain: true
     }
  }

  function submit(event) {
    //event.preventDefault();
    const { name, institution } = formData;
    //console.log(formData);
    api.post('dashboard/disciplina', { "name": name, "institution": institution },config).then((response) => {
      //alert("Cadastrado com Sucesso")
      //window.location.reload(false);
      flagFunction();
      setOpen(!open);

    }).catch((error) => {
      console.log(error);
    });
    //api.get()
  }

  function MudaInput(event) {
    console.log(event.target.name, event.target.value);
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

    return (
    <>
         <Link className="card add text-center"  onClick={handleToggle}>
            <AddCircleIcon /><h3 className="adicionar_texto"> &nbsp; Adicionar</h3>
        </Link>
        <Dialog open={open} onClose={handleToggle}  aria-labelledby="form-dialog-disciplina">
          <div className="o-center o-espaco-padrao o-text-center">
            <DialogTitle id="form-dialog-disciplina">Entrar</DialogTitle>
            <DialogContent>
              <div className={useStyles.root}>
                <div>
                    <TextField
                      id="instituicao"
                      label="Instituição"
                      variant="outlined"
                      name="institution"
                      onChange={MudaInput}
                      />
                    <br />
                    <br />
                    <TextField
                        id="nomeDisciplina"
                        label="Nome da Disciplina"
                        variant="outlined"
                        name="name"
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
                  onClick={handleToggle}
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