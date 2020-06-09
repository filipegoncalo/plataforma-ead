const knex = require('../database');

module.exports = {
    async index(request, response){ 
        const results = await knex('users');

        return response.json(results);
    },

    async create(request, response){
        const { first_name, last_name, email, password } = request.body;
        console.log(request.body);
        //await knex('users').insert();
    }
}