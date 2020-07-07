const bcrypt = require('bcrypt');

const Questions = require('../models/Question');
const { transaction } = require('objection');

module.exports = {

  async show(request, response) {
    try {
        const {id} = request.headers.authorization;
        const results = await Questions.query()
        .select("*")//.where("id",id);

        if(results!=""){
          return response.status(200).json(results);
        }
        return response.status(404).send("Informação não encontrada");

    } catch (error) {
      next(error);
    }

  },
  async selectByTest(request, response) {
    try {
      const {id_type} = request.headers.authorization;
      const results = await Questions.query()
        .select("*").where("id_test",id);

        if(results!=""){
          return response.status(200).json(results);
        }
        return response.status(404).send("Informação não encontrada");

    } catch (error) {
      next(error);
    }

  },
  async addQuestion(request, response) {
    const { ds_description, answer,id_test } = request.body;
    //const {} = request.headers.authorization;

    try {
     
      const results = await Questions.query()
        .insert({
          ds_description,
          answer,
          id_test
        });
        
      if(results!=0){
        return response.status(200).json(results);
      }
      return response.status(404).send("Erro ao inserir");

    } catch (error) {
      next(error);
    }

  },
  async addQuestionSimple(request, response) {
    const { ds_description, answer,id_test } = request.body;
    //const {} = request.headers.authorization;

    try {
      const returnValue = await Questions.transaction(async trx => {
        // Here you can use the transaction.
    
        // Whatever you return from the transaction callback gets returned
        // from the `transaction` function.
        return 'the return value of the transaction';
      });
      // Here the transaction has been committed.
    } catch (err) {
      // Here the transaction has been rolled back.
    }
    
    
  },
  async removeQuestion(request, response) {
    const id_question = request.headers.authorization;

    try {
      const results = await Questions.query().deleteById(id_question)
      if(results!=0){
        return response.status(200).json(results);
      }
      return response.status(404).send("Erro ao inserir");

    } catch (error) {
      next(error);
    }

  },
  async removeQuestionByTest(request, response) {
    const id_test = request.headers.authorization;

    try {
      const results = await Questions.query().deleteById(id_test)
      if(results!=0){
        return response.status(200).json(results);
      }
      return response.status(404).send("Erro ao deletar");

    } catch (error) {
      next(error);
    }

  },
  async changeQuestion(request, response) {
    const id_question = request.headers.authorization;
    const { ds_description, answer,id_test } = request.body;

    try {
      const results = await Questions.query().findById(id_question)
      .patch({
        ds_description,
        answer,
      })
      if(results!=0){
        return response.status(200).json(results);
      }
      return response.status(404).send("Erro ao inserir");

    } catch (error) {
      next(error);
    }

  },
  //add queston simple
  //add question multiple
}