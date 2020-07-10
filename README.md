![logo](https://user-images.githubusercontent.com/54011223/86034287-ae9d2a00-ba10-11ea-84da-81a451bba05a.png)


# Descrição do projeto

Projeto desenvolvido durante programa de formação da Fcamara 2020.

Através de análises e pesquisas no cenário da educação causado pelo COVID-19, notou-se uma grande dificuldade na adaptação a essa nova realidade, não só dos alunos, mas também dos professores e instituições,  resultando na queda da qualidade do ensino e prejudicando muitos esse ano letivo. Com a proposta de solucionar este problema, surge a plataforma e-Studa em um hackathon  de 7 semanas, focando nas dificuldades encontradas. Uma plataforma de ensino a distância de fácil uso com foco na interação entre professores e alunos, visando ajudar no engajamento de ambos, para que a migração do ensino presencial para o ensino distância  não tenha perda de qualidade.


# Como rodar a aplicação

No terminal, clone o projeto: `git clone https://github.com/filipegoncalo/plataforma-ead.git`

## Database:
* Para efetuar login no MySQL/Mariadb, digite o seguinte comando (Substitua username pelo nome do seu): `mysql -u username -p`

* Crie um banco com o comando: `CREATE DATABASE ead;`

* Sair do MySQL/Mariadb: `quit;`


## No backend:
1. Entre na pasta: `cd plataforma-ead/backend`

        Edite o arquivo .env :
            DB_USER=user
            DB_PASS=password
            DB_NAME=ead
            DB_HOST=127.0.0.1

            JWT_TOKEN_PRIVATE_KEY=<private key>
            JWT_REFRESH_TOKEN_PRIVATE_KEY=<refresh private key>



3. instale as dependencias: `npm install`

4. Excute as migrations: `npm run migrate`

5. Excute as migrations: `npm run seed`

6. Excute a API: `npm start`

## No frontend

1. Entre na pasta: `cd frontend`

2. Instale as dependencias: `npm install`

3. Excute a aplicação: `npm start`

## SQUAD
| <p>UX/UI</p>[<img src="https://static-exp1.licdn.com/sc/h/djzv59yelk5urv2ujlazfyvrk" width="150"><br><sub>Caio Felipe Xavier</sub>](https://www.linkedin.com/in/caio-xavier/) | <p>Backend</p>[<img src="https://avatars2.githubusercontent.com/u/54011223?s=400&u=ba51b628bac944b565c588671be15e974b330f59&v=4" width="150"><br><sub>Filipe Gonçalo</sub>](https://github.com/filipegoncalo) | <p>Frontend/Backend</p>[<img src="https://avatars3.githubusercontent.com/u/42469800?s=400&v=4" width="150"><br><sub>William Cabral</sub>](https://github.com/William8Cabral) | <p>Frontend</p>[<img src="https://avatars3.githubusercontent.com/u/31941580?s=400&u=c9c2f62c62dcf5c5db67d92fd31184533f2bceb2&v=4" width="150"><br><sub>Laurent Herman</sub>](https://github.com/LaurentHP) | <p>Frontend</p>[<img src="https://avatars2.githubusercontent.com/u/65873619?s=400&v=4" width="150"><br><sub>Pedro Henrique Brito</sub>](https://github.com/PedroHenriqueBrito) | 
| :---: |  :---: |  :---: |  :---: |  :---: |


## Acompanhe o desenvolvimento diário

- Monitoramento das atividades:
https://trello.com/b/NokSkBjj/monitoramento

- Roadmap funcionalidades:
https://trello.com/b/CFZJ0yho/roadmap-features-mvp

- Protótipo
https://bit.ly/3fg9DWU

- Protótipo navegável
https://bit.ly/3fl2lks

- Saiba mais
https://www.caioxavier.com/e-studa