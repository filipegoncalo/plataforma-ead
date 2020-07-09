import api from '../services/api';

const config = {
    headers: { 
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Access-Control-Allow-Origin': '*',
        crossDomain: true
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