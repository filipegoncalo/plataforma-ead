 
import React from 'react';
import {Button,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle,TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CancelIcon from '@material-ui/icons/Cancel';
import SaveIcon from '@material-ui/icons/Save';


const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
export function Dialogs({open,handleToggle,MudaInput,submit,tipo}){
    switch(tipo){
      case 'turmas':
        return(
          <Turmas open={open} handleToggle={handleToggle} MudaInput={MudaInput} submit={submit}/>
      );
      break;
      default:
        return(
        <Padrao open={open} handleToggle={handleToggle} MudaInput={MudaInput} submit={submit}/>
      );
      break;
    }
}
const Padrao=({open,handleToggle,MudaInput,submit})=>{
    return(
        <Dialog open={open} onClose={handleToggle}  aria-labelledby="form-dialog">
        <div className="o-center o-espaco-padrao o-text-center">
          <DialogTitle id="form-dialog" className="o-custom-cor-texto">Nova Disciplina</DialogTitle>
          <DialogContent>
            <div className={useStyles.root}>
              <div>
                  <TextField
                    id="instituicao"
                    label="Instituição"
                    variant="outlined"
                    name="institution"
                    className="o-tamanho-input-modal"
                    onChange={MudaInput}
                    />
                  <br />
                  <br />
                  <TextField
                      id="nomeDisciplina"
                      label="Nome da Disciplina"
                      variant="outlined"
                      name="name"
                      className="o-tamanho-input-modal"
                      onChange={MudaInput}
                  />
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <div className="c-botao o-center">
              <Button
                className="o-btn green o-tamanho-botao-login"
                variant="contained"
                color="primary"
                onClick={submit}
              >
              <SaveIcon fontSize="small" /> 
              &nbsp;
                Salvar
               </Button>
               &nbsp;
               <Button
                className="o-btn blue o-tamanho-botao-login"
                variant="contained"
                color="primary"
                onClick={handleToggle}
              >
                <CancelIcon fontSize="small" /> 
                &nbsp;
                Cancelar
               </Button>
            </div>
          </DialogActions>
        </div>
      </Dialog>
    )
}
const Turmas=({open,handleToggle,MudaInput,submit})=>{
  return(
      <Dialog open={open} onClose={handleToggle}  aria-labelledby="form-dialog">
      <div className="o-center o-espaco-padrao o-text-center o-tamanho-modal-criacao">
        <DialogTitle id="form-dialog" className="o-custom-cor-texto">Nova Turma</DialogTitle>
        <DialogContent>
          <div className={useStyles.root}>
            <div>
                <TextField
                  id="instituicao"
                  label="Instituição"
                  variant="outlined"
                  name="institution"
                  className="o-tamanho-input-modal"
                  onChange={MudaInput}
                  />
                <br />
                <br />
                <TextField
                    id="nomeDisciplina"
                    label="Nome da Disciplina"
                    variant="outlined"
                    name="name"
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
             <SaveIcon fontSize="small" /> 
              &nbsp;
              Salvar
             </Button>
             &nbsp;
             <Button
              className="o-btn blue o-tamanho-botao-login"
              variant="contained"
              color="primary"
              onClick={handleToggle}
            >
              <CancelIcon fontSize="small" /> 
              &nbsp;
              Cancelar
             </Button>
          </div>
        </DialogActions>
      </div>
    </Dialog>
  )
}
