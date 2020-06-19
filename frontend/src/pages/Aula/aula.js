import React, { Component } from 'react';
import '../Aula/aula.css';
import '../Utils/setup.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Utils/Img/logoBrancoM.png';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import SchoolIcon from '@material-ui/icons/School';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import PersonIcon from '@material-ui/icons/Person';
import CancelIcon from '@material-ui/icons/Cancel';

export default class aula extends Component {
  render() {
    return (
      <div>
          <nav className="col-md-2 sticky-top bg-color menuLateral ">
            <nav>
            <br></br>
              <img className="navbar-brand col-sm-12 logo" src={logo}/>
            </nav>
            <br></br>
            <div className="sidebar-sticky">             
              <ul className="nav flex-column">               
                <li className="nav-item">   
                  <a className="nav-link active" href="#">
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
                <li className="nav-item ">
                  <a className="nav-link" href="#collapseExample" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseExample">
                  <PersonIcon style={{ color: 'white'}}/>   Alunos
                  </a>
              <div class="row">
                <div class="col">
                  <div class="collapse" id="collapseExample"><div class="card card-body">nome1</div></div>
                </div>
              </div>
                </li>

                <div className="fixed-bottom">
                <li className="nav-item">
                  <a className="nav-link " href="#">
                  <CancelIcon style={{ color: 'white'}}/>   Encerrar Aula
                  </a>
                </li>
                </div>
              </ul>
            </div>
          </nav>
        </div>
    );
  }
}