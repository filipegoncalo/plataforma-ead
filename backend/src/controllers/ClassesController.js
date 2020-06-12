const knex = require('../database');
const bcrypt = require('bcrypt');
const Classes = knex('classes');

module.exports = {
    async index(request, response){ 
    },

    async create(request, response, next){
        var {name, id_screen, period,email} = request.body;
        var result =await Classes.insert({
            name,
            id_screen,
            period,
            email,
            id_on:1
        });
        if(result!=0){
            return response.send("Cadastrado com Sucesso");
        }
        return response.send("Erro ao Cadastrar")
    },

    async update(request, response, next){
        
    },

    async delete(request, response, next){
       
    }
}
