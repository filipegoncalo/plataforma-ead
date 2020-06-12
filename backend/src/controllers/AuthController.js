const knex = require('../database');
const bcrypt = require('bcrypt');
const User = knex('users');
const Crytography= require("../utils/Cryptography");
const Email =require('../utils/Email');
const BASEURL= "http://localhost:3333/reset/";


module.exports = {
    async login(request, response){ 
        let { email, password } = request.params;
        //return response.json({email:Crytography.crypt(email),password:Crytography.crypt(password)});
        password=Crytography.decrypt(password);
        //password="123456";
        var result = await User.select('id').where("email",email).where("password",password).first();
        if(result){
            return response.status(200).json(result);
        }
        return response.status(400).json("Email ou Senha incorreto");
    },

    async register(request, response, next){
        
    },

    async forget(request, response, next){
        //1f142b5d6becb7d77dbb87277ba597aa data
        var { email } = request.params;

        var date = new Date().toLocaleDateString().toString();
        var dateCrypto=Crytography.crypt(date);
        var _email=Crytography.decrypt(email);
        
        var result = await User.where("email",_email).first();
        if(result){
            await Email.enviar(_email,BASEURL+email+"/"+dateCrypto);
        }
        return response.status(200).send("Caso o email exista você receber-a um email "+_email);
    },

    async reset(request, response, next){
        //485c3e7b45640fe7947a972bf8e7c920 = 12345678
        var { email,password,date } = request.body;

        var _email=Crytography.decrypt(email);
        var _password=Crytography.decrypt(password);
        var _date=Crytography.decrypt(date);

        var localDate=new Date().toLocaleDateString().toString();
        if(localDate==_date){
            var result = await User.update({
                password: _password,
              }).where('email',_email);
        
            if(result!=0){
                response.status(200).send("Alterado com Sucesso");
            }
        }
        response.status(400).send("Erro ao alterar");


    },
}