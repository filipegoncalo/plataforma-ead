const express = require('express');
const cors = require('cors');
const response = require('./middlewares/response');

const Auth = require('./routes/AuthRoutes');
const Profile = require('./routes/ProfileRoutes');
const Disciplines = require('./routes/DisciplinesRoutes');
const Classes = require('./routes/ClassesRoutes');
const Tests = require('./routes/TestsRoutes');
const Questions = require('./routes/QuestionsRoutes');

const app = express();

app.use(response);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/auth', Auth);
app.use('/profile', Profile);
app.use('/dashbord', Disciplines);
app.use('/dashbord', Classes);
app.use('/dashbord', Tests);
app.use('/dashbord', Questions);

const port = 3333; //|| process.env.PORT;
app.listen(port, () => console.log(`API rodando na porta: ${port}...`));