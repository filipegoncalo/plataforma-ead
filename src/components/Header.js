import React from 'react';
import { Link } from 'react-router-dom';

import Routes from '../routes'

function Header(){
    return(
        <header>
            <Link to='/'>
                <h1>Início</h1>
            </Link>
            <h1>Planos</h1>            
        </header>
    )
}

export default Header;