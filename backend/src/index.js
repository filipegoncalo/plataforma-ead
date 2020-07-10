const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

const app = express();
app.use(cors());

const response = require('./middlewares/response');
const checkJwt = require('./middlewares/jwt');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const Auth = require('./routes/AuthRoutes');
const Profile = require('./routes/ProfileRoutes');
const Disciplines = require('./routes/DisciplinesRoutes');
const Classes = require('./routes/ClassesRoutes');
const Tests = require('./routes/TestsRoutes');
//const Questions = require('./routes/QuestionsRoutes');


app.use(response);
app.use(checkJwt);

app.use('/auth', Auth);
app.use('/dashboard', Profile);
app.use('/dashboard', Disciplines);
app.use('/dashboard/disciplina', Classes);
app.use('/dashboard/disciplina', Tests);
//app.use('/dashboard/disciplina/testes', Questions);

const port = 3333 //process.env.PORT ||;
app.listen(port, () => console.log(`API rodando na porta: ${port}...`));