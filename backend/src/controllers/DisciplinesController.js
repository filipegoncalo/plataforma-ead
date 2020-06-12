const knex = require('../database');
const bcrypt = require('bcrypt');
const Disciplines = knex('disciplines');

module.exports = {
    async index(request, response){ 
    },

    async create(request, response, next){
        var { name,description} = request.body;
        var result =await Disciplines.insert({
            name:name,
            description,description,
            id_on:1
        });
        if(result!=0){
            return response.send("Cadastrado com Sucesso");
        }
        return response.send("Erro ao Cadastrar");
    },

    async update(request, response, next){
        
    },

    async delete(request, response, next){
       
    }
}
