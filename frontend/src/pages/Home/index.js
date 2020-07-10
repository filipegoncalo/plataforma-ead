import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import './styles.css';
import '../../assets/setup.css';

import Header from '../../components/Header';

import imgGroup1 from '../../assets/home-group-1.png';
import imgAtivo1 from '../../assets/home-ativo-1.png';
import imgGirls from '../../assets/home-girls.png';
import imgNetworking from '../../assets/home-networking.png';
import imgQuiz from '../../assets/home-quiz.png';
import { Button } from '@material-ui/core';

import api from '../../services/api';

function Home() {

  return (
    <div>
      <Header />
      <main>
        <div className="o-background-blue">
          <Grid className="o-center c-banner o-espaco-padrao o-row">
              <Grid item xs={6}>
                <h1 className="o-title-1"> Aqui é fácil<br/> ensinar <br/> e aprender!</h1>
                <p>Comece a usar agora gratuitamente</p>
                <Button className="o-btn gray" to="/cadastro" variant="contained"  component={Link}>Cadastrar </Button>
              </Grid>
              <Grid item xs={6}>
                <img className="o-img" src={imgGroup1} alt='Grupo de estudo' />
              </Grid>
          </Grid>
        </div>

        <div className="c-ambiente o-center o-espaco-padrao">
          <Grid className="o-row"> 
            <Grid item xs={8} className="u-pr-5">
              <h2 className="o-title-2">Sua aula nunca foi tão divertida!</h2>
              <p className="pr-15">
                Um ambiente de aula completo para que o aluno consiga absorver
                o máximo do aprendizado, utilizando dinâmicas adptadas das salas
                de aulas presenciais.
              </p>
            </Grid>
            <Grid item xs={4} >
              <img className="o-img" src={imgAtivo1} alt='Garota estudando' />
            </Grid>
          </Grid>
        </div>


        <div className="c-boxes-home o-center o-espaco-padrao o-pt-0">
          <Grid className="o-row" >

            <Grid item xs={4}>
              <img className="o-img" src={imgGirls} alt='Garotas estudando' />
              <p>Seus alunos terão a mesma experiência, seja utilizando a plataforma
                em um computador ou celular.</p>
            </Grid>

            <Grid item xs={4} >
              <img className="o-img" src={imgQuiz} alt='Quiz' />
              <p>Engaje os estudantes com desafios e em um sistema gamificado
                utilizando as ferramentas que oferecemos.
              </p>
            </Grid>

            <Grid item xs={4}>
              <img className="o-img" src={imgNetworking} alt='Jovens se comunicando remotamente' />
              <p>Crie grupo de discussões nas aulas on-line para que seus alunos
                trabalhem em grupo sob sua supervisão.
              </p>
            </Grid>

          </Grid>
         </div>
          <div className="o-center o-text-center o-pb-5">
          <Button className="o-btn blue" to="/cadastro" variant="contained"  component={Link}>Cadastrar </Button>
          </div>
      </main>
    </div>
  );
}

export default Home;