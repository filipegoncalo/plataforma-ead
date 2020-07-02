import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Routes from '../routes'
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';


import Login from '../pages/Login/Login';


function Header() {
    return (
        <header className="o-center">
            <div className="c-header">
                <div className="c-links">
                    <Link to="/">
                        <img src={logo}></img>
                    </Link>
                    <Link to='/'>
                        Início
                    </Link>
                    <Link to='/planos'>
                        Planos
                    </Link>
                </div>
                <div >
                    <Login />
                </div>
            </div>
        </header>
    )
}

export default Header;