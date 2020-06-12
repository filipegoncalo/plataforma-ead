import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import '../Header/Header.css';



function HeaderOff(){
    return(
        <nav class="navbar navbar-light bg-white">
            <a class="navbar-brand" href="#">
                <img src="" width="50" height="50" alt="Logo"></img>
            </a>
            <Nav className="mr-auto">
                <Nav.Link className="navcl1" href="#home">Início</Nav.Link>
                <Nav.Link className="navcl1" href="#features">Planos</Nav.Link>
            </Nav>
            <Button variant="primary" className="btnfont" size="lg">Entrar</Button>
        </nav>
    )
}

export default HeaderOff;