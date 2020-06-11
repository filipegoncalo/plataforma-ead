const express = require('express');
const routes = require('./routes');
const {errors}=require("celebrate");

const app = express();

app.use(express.json());
app.use(routes);

app.use((error, request, response, next) => {
    response.status(error.status || 500);
    response.json({ error: error.message })
})

app.use(errors());

app.listen(3333, () => console.log('Server is running'));