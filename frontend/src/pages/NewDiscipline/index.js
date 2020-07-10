import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {dashboardMain,dashboardTurma} from '../../dao';
import {Dialogs} from '../../dialogs';

//redirecionamento
import { useHistory } from "react-router-dom";


function NewDiscipline({flagFunction,tipo}) {

    const history = useHistory();
    const [] = useState("");
    const [open, setOpen] = useState();
    useEffect(()=>{

    },[open]);
    tipo=tipo.toLowerCase();

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



  function submit() {
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
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value })
  }




  return (
    <>
         <Link className="card add text-center"  onClick={handleToggle}>
            <AddCircleIcon /><h3 className="adicionar_texto"> &nbsp; Adicionar</h3>
        </Link>
        <Dialogs open={open} handleToggle={handleToggle} MudaInput={MudaInput} submit={submit} tipo={tipo}/>
        
    </>

  )
}
export default NewDiscipline;