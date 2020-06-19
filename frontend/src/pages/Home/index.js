import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import '../../assets/setup.css';

import Quiz from '../Quiz/Dialogs/CriarAtividade';

import Header from '../../components/Header'

import imgGroup1 from '../../assets/home-group-1.png'
import imgAtivo1 from '../../assets/home-ativo-1.png'
import imgGirls from '../../assets/home-girls.png'
import imgNetworking from '../../assets/home-networking.png'
import imgQuiz from '../../assets/home-quiz.png'

function Home() {
    return (
        <div>
          <Quiz />
        </div>

      // <div>
      //   <Header />

      //   <main>
      //     <div>
      //       <h3>
      //         Aqui é fácil ensinar e aprender!
      //       </h3>
      //       <p>
      //         Comece a usar agora gratuitamente
      //       </p>

      //       <img src={imgGroup1} alt='Grupo de estudo' />
      //     </div>

      //     <div>
      //       <h4>
      //         Sua aula nunca foi tão divertida!
      //       </h4>
      //       <p>
      //         Um ambiente de aula completo para que o aluno consiga absorver 
      //         o máximo do aprendizado, utilizando dinâmicas adptadas das salas 
      //         de aulas presenciais.
      //       </p>

      //       <img src={imgAtivo1} alt='Garota estudando' />
      //     </div>

      //     <div>
      //       <p>
      //         <img src={imgGirls} alt='Garotas estudando' />

      //         <br />Seus alunos terão a mesma experiência, seja utilizando a plataforma 
      //         em um computador ou celular.
      //       </p>
      //     </div>

      //     <div>
      //       <p>
      //         <img src={imgQuiz} alt='Quiz' />

      //         <br />Engaje os estudantes com desafios e em um sistema gamificado 
      //         utilizando as ferramentas que oferecemos.
      //       </p>
      //     </div>

      //     <div>
      //       <p>
      //         <img src={imgNetworking} alt='Jovens se comunicando remotamente' />

      //         <br />Crie grupo de discussões nas aulas on-line para que seus alunos 
      //         trabalhem em grupo sob sua supervisão.
      //       </p>
      //     </div>

      //     <Link to='/cadastro'>Cadastrar</Link>
      //   </main>

      // </div>
    );
  }
  
  export default Home;