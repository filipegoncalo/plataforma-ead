import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import '../../pages/Aula/aula.css';
import '../../assets/setup.css';
import Logo from '../../assets/logoBrancoM.png';
import PersonIcon from '@material-ui/icons/Person';
import CancelIcon from '@material-ui/icons/Cancel';
import JitsiRoom from '../../components/JitsiMeet';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
//icones
import ScreenShareIcon from '@material-ui/icons/ScreenShare';
import HomeIcon from '@material-ui/icons/Home';
import SchoolIcon from '@material-ui/icons/School';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitationOutlined';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';

const items = [
  { name: 'quizz', label: 'Quizz', icone: <EmojiEventsIcon style={{ color: 'white'}}/>, link: '#' },
  { name: 'exercicios', label: 'Exercícios', icone: <PlaylistAddCheckIcon  style={{ color: 'white'}}/>, link: '/exercicios' },
  { name: 'provas', label: 'Provas', icone: <PlaylistAddCheckIcon  style={{ color: 'white'}}/>, link: '/provas' },
]

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
          <MenuLateral items={items}/>
          <main className="o-jitsi">
            <JitsiRoom/>
          </main>        
      </div>
    );
  }
}