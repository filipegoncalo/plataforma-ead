![logo](https://user-images.githubusercontent.com/54011223/86034287-ae9d2a00-ba10-11ea-84da-81a451bba05a.png)


# Plataforma EAD
    Projeto desenvolvido durante programa de formação da Fcamara 2020.

# Descrição do projeto

- Uma plataforma de ensino a distância de fácil uso com foco na interação entre professores e alunos, visando ajudar no engajamento de ambos, para que a migração do ensino presencial para o ensino distância  não tenha perda de qualidade.

- Tecnologia usada: Node.js, ReactJS e MySQL

# Como rodar a aplicação

## No terminal, clone o projeto:
    git clone https://github.com/filipegoncalo/plataforma-ead.git

## Database:
Para efetuar login no MySQL/Mariadb, digite o seguinte comando. Substitua username pelo nome do seu usuário no MySQL/Mariadb e digite sua senha: `mysql -u username -p`

Crie um banco com o comando: `CREATE DATABASE ead;`

Sair do MySQL/Mariadb: `quit;`

## Entre na pasta do projeto:
    cd plataforma-ead

## No backend instale as dependencias e excute as migrations e seeds:
Entre na pasta: `cd backend`

instale as dependencias: `npm install`

    Atualizar as informações de usuário e senha no arquivo "knexfile.js"

Excute as migrations: `npm run migrate`

Excute as migrations: `npm run seed`

Excute a API: `npm start`

## No frontend

Entre na pasta: `cd frontend`

Instale as dependencias: `npm install`

Excute a aplicação: `npm start`

## Acompanhe o desenvolvimento diário

- Monitoramento das atividades:
https://trello.com/b/NokSkBjj/monitoramento

- Roadmap funcionalidades:
https://trello.com/b/CFZJ0yho/roadmap-features-mvp

- Protótipo baixa:
https://www.figma.com/file/cvqSPX3Vbomks0yXeZ4UUp/Fcamara?node-id=0%3A1

- Protótipo alta / style guide inicial:
https://www.figma.com/file/B8OnHAurOKAhe0L8Gi3KUM/e-Studa?node-id=137%3A0

- Drive:
https://drive.google.com/drive/folders/1TOnI4Zx-a2D2gz98Ro1drZsy9u99aR3f?usp=sharing