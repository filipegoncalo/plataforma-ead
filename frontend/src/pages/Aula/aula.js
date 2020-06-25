import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import '../../pages/Aula/aula.css';
import '../../assets/setup.css';
import Logo from '../../assets/logoBrancoM.png';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import SchoolIcon from '@material-ui/icons/School';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import PersonIcon from '@material-ui/icons/Person';
import CancelIcon from '@material-ui/icons/Cancel';

export default class aula extends Component {
  state = {open: false,};
  handleButtonClick = () => {
    this.setState(state => {
      return {
        open: !state.open,
      };
    });
  };
  render() {
    return (
      <div className="menuSalaDeAula row">
          <nav className="col-md-2  bg-color menuLateral ">
            <nav>
            <br></br>
              <img className="navbar-brand col-sm-12 logo" src={Logo}/>
            </nav>
            <br></br>
            <div className="">             
              <ul className="nav flex-column">               
                <li className="nav-item">   
                  <a className="nav-link" href="#">
                    <EmojiEventsIcon style={{ color: 'white'}}/>   Quizz  
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <SchoolIcon style={{ color: 'white'}}/>   Exercícios
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                  <SchoolIcon style={{ color: 'white'}}/>   Prova
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                  <PlaylistAddCheckIcon style={{ color: 'white'}}/>   Chamada
                  </a>
                </li>

                <li className="nav-item">
                <a className="nav-link dropAluno" href="#"  onClick={this.handleButtonClick}>
                <PersonIcon style={{ color: 'white'}}/>   Alunos</a>
                {this.state.open && (
                <div className="listaAluno">
                  <ul>
                    <a className="nav-link">Aluno 1</a>
                    <a className="nav-link">Aluno 2</a>
                    <a className="nav-link">Aluno 3</a>
                  </ul>
                </div>)}
                </li>
                </ul>
                </div> 
              <div className="encerrarAula col-md-10 sidebar-sticky">
                  <li className="nav-item">
                    <a className="nav-link " href="#">
                      <CancelIcon style={{ color: 'white'}}/>   Encerrar Aula
                    </a>
                  </li>
            </div>
          </nav>
          <div className="col">
            <h1>Código do Jitsi ---------------------------------------------------</h1>
          </div>        
      </div>
    );
  }
}