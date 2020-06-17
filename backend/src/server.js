const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const httpError = require('./middlewares/errors');

//require('dotenv').config();

const app = express();

const port = 3333; //|| process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(routes);
app.use((error, req, res, next) => httpError(error, req, res, next));

app.listen(port, () => console.log(`API rodando na porta: ${port}...`));