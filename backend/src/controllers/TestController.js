const bcrypt = require('bcrypt');

const Test = require('../models/Test');

module.exports = {
  //disciplina/turma/test
  async index(request, response, next) {
    try {
       // .join('test', '.id', '=', 'point_items.point_id')
      const results = await Test.query()
        .select("test.*","u.first_name","last_name","teacher","link","c.name as turma")
        //.join("classes",".id_classes","=","classes.id")
        .innerJoin('classes as c', 'test.id_classes', 'c.id')
        .innerJoin('users as u', 'c.teacher', 'u.id').where("formation","Professor");
        //where("teste.id","1");
        //.join("classes",".id_classes","=","classes.id")
        //.join("classes",".id_classes","=","classes.id")
        ;
      return response.json(results);

    } catch (error) {
      next(error);
    }

  },

  async addTest(request, response, next) {
    const { name, id_classes,note } = request.body;
    const {id_type} = request.headers.authorization;

    try {
      const results = await Test.query()
        .insert({
          name,
          id_type,
          note,
          id_classes
        });
      if(results!=0){
        return response.status(200).json(results);
      }
      return response.status(404).send("Erro ao inserir");

    } catch (error) {
      next(error);
    }

  },

  async studentByDisciplineClass(request, response, next) {
    try {
      //id_disciplines/:id_turma/:id_test
      const {id_disciplines,id_classe,id_test}=request.params;

      const results = await Test.query()
        .select("test.id as id_test","test.name as nameProva","test.id_type","test.note")
        .select("u.first_name","u.last_name")
        .select("c.id as id_classe","c.teacher","c.link","c.name as turma")
        .select("d.id as id_disciplines","d.name as name_discipline","d.description as discipline_description")
        .innerJoin('classes as c', 'test.id_classes', 'c.id')
        .innerJoin('users as u', 'c.teacher', 'u.id')
        .innerJoin("disciplines as d","c.discipline_id","d.id")
        .where("d.id",id_disciplines)
        .where("c.id",id_classe)
        .where("test.id",id_test)
        //.where("formation","Aluno");
        if(results!=""){
          return response.status(200).json(results);
        }
        return response.status(404).send("Informação não encontrada");

    } catch (error) {
      next(error);
    }

  },
  async teacherByDisciplineClass(request, response, next) {
    try {
      //id_disciplines/:id_turma/:id_test
      const {id_disciplines,id_classe,id_test}=request.params;

      const results = await Test.query()
        .select("test.id as id_test","test.name as nameProva","test.id_type","test.note")//"u.first_name","u.last_name","c.teacher","link","c.name as turma"
        .select("u.first_name","u.last_name")
        .select("c.id as id_classe","c.teacher","c.link","c.name as turma")
        .select("d.id as id_disciplines","d.name as name_discipline","d.description as discipline_description")
        .innerJoin('classes as c', 'test.id_classes', 'c.id')
        .innerJoin('users as u', 'c.teacher', 'u.id')
        .innerJoin("disciplines as d","c.discipline_id","d.id")
        .where("d.id",id_disciplines)
        .where("c.id",id_classe)
        .where("test.id",id_test)
        .where("formation","Professor");
        if(results!=""){
          return response.status(200).json(results);
        }
        return response.status(404).send("Informação não encontrada");

    } catch (error) {
      next(error);
    }

  },
  async classesByTest(request, response, next) {
    try {
      //id_disciplines/:id_turma/:id_test
      const {id_classe}=request.params;

      const results = await Test.query()
        .select("test.id as id_test","test.name as nameProva","test.id_type","test.note")//"u.first_name","u.last_name","c.teacher","link","c.name as turma"
        .select("u.first_name","u.last_name")
        .select("c.id as id_classe","c.teacher","c.link","c.name as turma")
        .select("d.id as id_disciplines","d.name as name_discipline","d.description as discipline_description")
        .innerJoin('classes as c', 'test.id_classes', 'c.id')
        .innerJoin('users as u', 'c.teacher', 'u.id')
        .innerJoin("disciplines as d","c.discipline_id","d.id")
        .where("c.id",id_classe)
        .where("formation","Aluno");
      if(results!=""){
        return response.status(200).json(results);
      }
        return response.status(404).send("Informação não encontrada");

    } catch (error) {
      next(error);
    }

  },
  async classesAlunoByTest(request, response, next) {
    try {
      //id_disciplines/:id_turma/:id_test
      const {id_user,id_classe }=request.params;

      const results = await Test.query()
        .select("test.id as id_test","test.name as nameProva","test.id_type","test.note")//"u.first_name","u.last_name","c.teacher","link","c.name as turma"
        .select("u.first_name","u.last_name")
        .select("c.id as id_classe","c.teacher","c.link","c.name as turma")
        .select("d.id as id_disciplines","d.name as name_discipline","d.description as discipline_description")
        .innerJoin('classes as c', 'test.id_classes', 'c.id')
        .innerJoin('users as u', 'c.teacher', 'u.id')
        .innerJoin("disciplines as d","c.discipline_id","d.id")
        .where("c.id",id_classe)
        .where("u.id", id_user)
        .where("formation","Aluno");
      if(results!=""){
        return response.status(200).json(results);
      }
        return response.status(404).send("Informação não encontrada");

    } catch (error) {
      next(error);
    }

  },
  async classesDisciplineByTest(request, response, next) {
    try {
      //id_disciplines/:id_turma/:id_test
      const {id_user, id_discipline }=request.params;

      const results = await Test.query()
        .select("test.id as id_test","test.name as nameProva","test.id_type","test.note")//"u.first_name","u.last_name","c.teacher","link","c.name as turma"
        .select("u.first_name","u.last_name")
        .select("c.id as id_classe","c.teacher","c.link","c.name as turma")
        .select("d.id as id_disciplines","d.name as name_discipline","d.description as discipline_description")
        .innerJoin('classes as c', 'test.id_classes', 'c.id')
        .innerJoin('users as u', 'c.teacher', 'u.id')
        .innerJoin("disciplines as d","c.discipline_id","d.id")
        .where("u.id", id_user)
        .where("d.id",id_discipline)
        .where("formation","Aluno");
      if(results!=""){
        return response.status(200).json(results);
      }
        return response.status(404).send("Informação não encontrada");

    } catch (error) {
      next(error);
    }

  },
  async studentByTest(request, response, next) {
    try {
      //id_disciplines/:id_turma/:id_test
      const { id_user}=request.params;

      const results = await Test.query()
        .select("test.id as id_test","test.name as nameProva","test.id_type","test.note")//"u.first_name","u.last_name","c.teacher","link","c.name as turma"
        .select("u.first_name","u.last_name")
        .select("c.id as id_classe","c.teacher","c.link","c.name as turma")
        .select("d.id as id_disciplines","d.name as name_discipline","d.description as discipline_description")
        .innerJoin('classes as c', 'test.id_classes', 'c.id')
        .innerJoin('users as u', 'c.teacher', 'u.id')
        .innerJoin("disciplines as d","c.discipline_id","d.id")
        .where("u.id", id_user)
        .where("formation","Aluno");
      if(results!=""){
        return response.status(200).json(results);
      }
        return response.status(404).send("Informação não encontrada");

    } catch (error) {
      next(error);
    }

  },

  //de determinado aluno
  async multipleChoiceTest(request, response, next) {
    try {
      //id_disciplines/:id_turma/:id_test
      const {id_user,id_test,id_test_type}=request.params;

      const results = await Test.query()
        .select("test.id as id_test","test.name as nameProva","test.id_type","test.note")//"u.first_name","u.last_name","c.teacher","link","c.name as turma"
        .select("u.first_name","u.last_name")
        .select("c.id as id_classe","c.teacher","c.link","c.name as turma")
        .select("d.id as id_disciplines","d.name as name_discipline","d.description as discipline_description")
        .innerJoin('classes as c', 'test.id_classes', 'c.id')
        .innerJoin('users as u', 'c.teacher', 'u.id')
        .innerJoin("disciplines as d","c.discipline_id","d.id")
        .innerJoin("questions as q","test.id","q.id_test")
        .innerJoin("alternatives as a","q.id_questions","a.id_questions")
        .where("test.id",id_test)
        .where("q.id_type",id_test_type)
        .where("u.id", id_user)
        .where("formation","Aluno");
        
      if(results!=""){
        return response.status(200).json(results);
      }
        return response.status(404).send("Informação não encontrada");

    } catch (error) {
      next(error);
    }

  },
  //de determinado aluno
  async simpleTest(request, response, next) {
    try {
      //id_disciplines/:id_turma/:id_test
      const {id_user,id_test,id_test_type}=request.params;

      const results = await Test.query()
        .select("test.id as id_test","test.name as nameProva","test.id_type","test.note")//"u.first_name","u.last_name","c.teacher","link","c.name as turma"
        .select("u.first_name","u.last_name")
        .select("c.id as id_classe","c.teacher","c.link","c.name as turma")
        .select("d.id as id_disciplines","d.name as name_discipline","d.description as discipline_description")
        .innerJoin('classes as c', 'test.id_classes', 'c.id')
        .innerJoin('users as u', 'c.teacher', 'u.id')
        .innerJoin("disciplines as d","c.discipline_id","d.id")
        .innerJoin("questions as q","test.id","q.id_test")
        .innerJoin("answers as a","q.id_questions","a.id_questions")
        .where("test.id",id_test)
        .where("q.id_type",id_test_type)
        .where("u.id", id_user)
        .where("formation","Aluno");
      if(results!=""){
        return response.status(200).json(results);
      }
        return response.status(404).send("Informação não encontrada");

    } catch (error) {
      next(error);
    }

  },
  async checkChoiceTest(request, response, next) {
    try {
      //id_disciplines/:id_turma/:id_test
      const {id_discipline, id_user,id_test,id_test_type}=request.params;

      const results = await Test.query()
        .select("test.id as id_test","test.name as nameProva","test.id_type","test.note")//"u.first_name","u.last_name","c.teacher","link","c.name as turma"
        .select("u.first_name","u.last_name")
        .select("c.id as id_classe","c.teacher","c.link","c.name as turma")
        .select("d.id as id_disciplines","d.name as name_discipline","d.description as discipline_description")
        .innerJoin('classes as c', 'test.id_classes', 'c.id')
        .innerJoin('users as u', 'c.teacher', 'u.id')
        .innerJoin("disciplines as d","c.discipline_id","d.id")
        .where("u.id", id_user)
        .where("formation","Aluno");
      if(results!=""){
        return response.status(200).json(results);
      }
        return response.status(404).send("Informação não encontrada");

    } catch (error) {
      next(error);
    }

  },
  async checkSimpleTest(request, response, next) {
    try {
      //id_disciplines/:id_turma/:id_test
      const {id_discipline, id_user,id_test,id_test_type}=request.params;

      const results = await Test.query()
        .select("test.id as id_test","test.name as nameProva","test.id_type","test.note")//"u.first_name","u.last_name","c.teacher","link","c.name as turma"
        .select("u.first_name","u.last_name")
        .select("c.id as id_classe","c.teacher","c.link","c.name as turma")
        .select("d.id as id_disciplines","d.name as name_discipline","d.description as discipline_description")
        .innerJoin('classes as c', 'test.id_classes', 'c.id')
        .innerJoin('users as u', 'c.teacher', 'u.id')
        .innerJoin("disciplines as d","c.discipline_id","d.id")
        .where("u.id", id_user)
        .where("formation","Aluno");
      if(results!=""){
        return response.status(200).json(results);
      }
        return response.status(404).send("Informação não encontrada");

    } catch (error) {
      next(error);
    }

  },
  



}