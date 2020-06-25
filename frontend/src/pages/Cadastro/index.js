import React from 'react';

import CustomDialog from '../../components/Dialog';

function Cadastro() {
    //Funções de controle do modal
    const [isOpen, setIsOpen] = React.useState(false);

    const handleDialogClose = () => {
        setIsOpen(false);
    }

    return (
       <CustomDialog
            isOpen={isOpen}
            handleClose={handleDialogClose}
            title='Cadastre-se Gratuitamente'
       >
          <h1>Teste</h1>
       </CustomDialog>
    );
  }
  
  export default Cadastro;