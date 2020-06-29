const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const httpError = require('./middlewares/errors');

//require('dotenv').config();
const port = 3333; //|| process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use((error, req, res, next) => httpError(error, req, res, next));

app.listen(port, () => console.log(`API rodando na porta: ${port}...`));