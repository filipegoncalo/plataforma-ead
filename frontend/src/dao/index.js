import api from '../services/api';

const config = {
    headers: { 
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Access-Control-Allow-Origin': '*',
        crossDomain: true
     }
}
  
const config2 = {
  headers: { 
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Access-Control-Allow-Origin': '*',
    crossDomain: true,
    'discipline_id':localStorage.getItem('id_discipline')
 }
}

export function dashboardMain(formData,flagFunction,handleOpen){
    const { name, institution } = formData;

    api.post('dashboard/disciplina', { "name": name, "institution": institution },config).then((response) => {
      flagFunction();
      handleOpen();

    }).catch((error) => {
      console.log(error);
    });
}
export function dashboardTurma(formData,flagFunction,handleOpen){
  const { name, institution } = formData;

  api.post('/dashboard/disciplina/turma', { "name": name, "institution": institution },config2 )
    .then((response) => {
      console.log("add")
      console.log(response)
        flagFunction();
        handleOpen();

  }).catch((error) => {
    console.log(error);
  });
}