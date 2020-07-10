import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {dashboardMain,dashboardTurma} from '../../dao';
import {Dialogs} from '../../dialogs';

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
import { CalendarToday } from '@material-ui/icons';


function NewDiscipline({flagFunction,tipo}) {

    const history = useHistory();
    const [redirect, setRedirect] = useState("");
    const [open, setOpen] = useState();
    useEffect(()=>{

    },[open]);
    tipo=tipo.toLowerCase();
    //alert(tipo);

    let type={};
  
  switch(tipo){
    default:
        type={name: "",institution: ""};
  }

  const [formData, setFormData] = useState(type)

  function handleOpen(){
    setOpen(!open);
  }

  function handleToggle(event) {
    event.preventDefault();
    switch(tipo){
        case 'quiz':
            history.push("/quiz-criar");
          break;
          case 'provas':
            history.push("/prova-criar");
          break;
          case 'exercicios':
            history.push("/exercicios-criar");
          break;
        default:
            handleOpen();
        break;

    }
  }



  function submit(event) {
    //alert(tipo);
    switch(tipo){
      case 'turmas':
            dashboardTurma(formData,flagFunction,handleOpen);
        break;
        default:
            dashboardMain(formData,flagFunction,handleOpen);
        break;

    }
  }


  function MudaInput(event) {
    //console.log(event.target.name, event.target.value);
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value })
  }




  return (
    <>
         <Link className="card add text-center"  onClick={handleToggle}>
            <AddCircleIcon /><h3 className="adicionar_texto"> &nbsp; Adicionar</h3>
        </Link>
        <Dialogs open={open} handleToggle={handleToggle} MudaInput={MudaInput} submit={submit} tipo={tipo}/>
        {/* <Dialog open={open} onClose={handleToggle}  aria-labelledby="form-dialog-disciplina">
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
      </Dialog> */}

    </>

  )
}
export default NewDiscipline;