import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import '../Header/Header.css';


function HeaderOn(){
    return(
        <nav class="navbar navbar-light bg-white">
            <a class="navbar-brand" href="#">
                <img src="" width="50" height="50" alt="Logo"></img>
            </a>
            <Nav className="mr-auto">
            </Nav>
                <Button variant="primary" className="btnfont" size="lg">Início</Button>
                <Button variant="primary" className="btnfont" size="lg">Premium</Button>
                <Button variant="primary" className="btnfont" size="lg">Sair</Button>
        </nav>
    )
}

export default HeaderOn;