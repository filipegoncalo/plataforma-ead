const knex = require('../database');
const bcrypt = require('bcrypt');
const User = knex('users');

module.exports = {
    async index(request, response){ 
        const results = await User;

        return response.json(results);
    },

    async create(request, response, next){
        try{
            const { first_name, last_name, email } = request.body;
            
            const salt = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash(request.body.password, salt);

            await User.insert({
                first_name,
                last_name,
                email,
                password: hashedPassword
            });

            return response.status(201).send();

        } catch (error) {
            next(error);
        }
    },

    async update(request, response, next){
        try{
            const { first_name, last_name, genre, datebirth, document, photo, formation } = request.body;
            const { id } = request.params;
            
            if ({id}) {
                await User.update({
                    first_name: first_name,
                    last_name: last_name,
                    genre: genre,
                    datebirth: datebirth,
                    document: document,
                    photo: photo,
                    formation: formation,
                  }).where({ id });
    
                return response.status(201).send({message: 'Updated successfully'});
            }

        } catch (error) {
            next(error);
        }
    },

    async delete(request, response, next){
        try {
            const {id} = request.params;

            await User.where({id}).del();

            return response.status(201).send({message: 'Successfully deleted'});

        } catch (error) {
            next(error)
        }
    }
}
