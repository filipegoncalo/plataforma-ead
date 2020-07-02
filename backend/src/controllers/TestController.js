const Test = require('../models/Tests');

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
      return response.json(results);

    } catch (error) {
      next(error);
    }

  },

  async addTest(request, response, next) {
    const { name, type, note } = request.body;
    const teacher = request.headers.authorization;

    const discipline_id = 1;

    console.log(teacher, discipline_id, name, type, note)

    try {
      const results = await Test.query()
        .insert({
          teacher,
          discipline_id,
          name,
          type,
          note
        });

        console.log(results)

      if(results === true){
        return response.status(200).json(results);
      }
      return response.status(402).json("Erro ao inserir");

    } catch (error) {
      next(error);
    }

  },

  async userByDisciplineClass(request, response, next) {
    try {
      //id_disciplines/:id_turma/:id_test
      const formation = request.headers.authorization;
      const {id_disciplines,id_classes,id_test}=request.params;

      const results = await Test.query()
        .select("test.id as id_test","test.name as nameProva","test.id_type","test.note")
        .select("u.first_name","u.last_name")
        .select("c.id as id_classe","c.teacher","c.link","c.name as turma")
        .select("d.id as id_disciplines","d.name as name_discipline","d.description as discipline_description")
        .innerJoin('classes as c', 'test.id_classes', 'c.id')
        .innerJoin('users as u', 'c.teacher', 'u.id')
        .innerJoin("disciplines as d","c.discipline_id","d.id")
        .where("d.id",id_disciplines)
        .where("c.id",id_classes)
        .where("test.id",id_test)
        .where("formation",formation);

        if(results!=""){
          return response.status(200).json(results);
        }
        return response.status(404).send("Informação não encontrada");

    } catch (error) {
      next(error);
    }

  },
  // async teacherByDisciplineClass(request, response, next) {
  //   try {
  //     //id_disciplines/:id_turma/:id_test
  //     const {id_disciplines,id_classes,id_test}=request.params;

  //     const results = await Test.query()
  //       .select("test.id as id_test","test.name as nameProva","test.id_type","test.note")//"u.first_name","u.last_name","c.teacher","link","c.name as turma"
  //       .select("u.first_name","u.last_name")
  //       .select("c.id as id_classe","c.teacher","c.link","c.name as turma")
  //       .select("d.id as id_disciplines","d.name as name_discipline","d.description as discipline_description")
  //       .innerJoin('classes as c', 'test.id_classes', 'c.id')
  //       .innerJoin('users as u', 'c.teacher', 'u.id')
  //       .innerJoin("disciplines as d","c.discipline_id","d.id")
  //       .where("d.id",id_disciplines)
  //       .where("c.id",id_classes)
  //       .where("test.id",id_test)
  //       .where("formation","Professor");
  //       if(results!=""){
  //         return response.status(200).json(results);
  //       }
  //       return response.status(404).send("Informação não encontrada");

  //   } catch (error) {
  //     next(error);
  //   }

  // },
  async classesByTest(request, response, next) {
    try {
      //id_disciplines/:id_turma/:id_test
      const formation = request.headers.authorization;
      const {id_classes}=request.params;

      const results = await Test.query()
        .select("test.id as id_test","test.name as nameProva","test.id_type","test.note")//"u.first_name","u.last_name","c.teacher","link","c.name as turma"
        .select("u.first_name","u.last_name")
        .select("c.id as id_classe","c.teacher","c.link","c.name as turma")
        .select("d.id as id_disciplines","d.name as name_discipline","d.description as discipline_description")
        .innerJoin('classes as c', 'test.id_classes', 'c.id')
        .innerJoin('users as u', 'c.teacher', 'u.id')
        .innerJoin("disciplines as d","c.discipline_id","d.id")
        .where("c.id",id_classes)
        .where("formation",formation);
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
      const formation = request.headers.authorization;
      const {id_user,id_classes }=request.params;

      const results = await Test.query()
        .select("test.id as id_test","test.name as nameProva","test.id_type","test.note")//"u.first_name","u.last_name","c.teacher","link","c.name as turma"
        .select("u.first_name","u.last_name")
        .select("c.id as id_classe","c.teacher","c.link","c.name as turma")
        .select("d.id as id_disciplines","d.name as name_discipline","d.description as discipline_description")
        .innerJoin('classes as c', 'test.id_classes', 'c.id')
        .innerJoin('users as u', 'c.teacher', 'u.id')
        .innerJoin("disciplines as d","c.discipline_id","d.id")
        .where("c.id",id_classes)
        .where("u.id", id_user)
        .where("formation",formation);
       // return response.status(200).json(id_classes);
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
      const formation = request.headers.authorization;
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
        .where("formation",formation);
      if(results!=""){
        return response.status(200).json(results);
      }
        return response.status(404).send("Informação não encontrada");

    } catch (error) {
      next(error);
    }

  },
  async userByTest(request, response, next) {
    try {
      //id_disciplines/:id_turma/:id_test
      const formation = request.headers.authorization;
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
        .where("formation",formation);
       // return response.json("a")
      if(results!=""){
        return response.status(200).json(results);
      }
        return response.status(404).send("Informação não encontrada");

    } catch (error) {
      next(error);
    }

  },

  //de determinado aluno
  async ByTestType(request, response, next) {
    try {
      //id_disciplines/:id_turma/:id_test
      const {id_type}=request.params;

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
        //.where("test.id",id_test)
        .where("q.id_type",id_type)
        //.where("u.id", id_user)
       // .where("formation","Aluno");
        
      if(results!=""){
        return response.status(200).json(results);
      }
        return response.status(404).send("Informação não encontrada");

    } catch (error) {
      next(error);
    }

  },
  //de determinado aluno
  async ByTestTypeUser(request, response, next) {
    try {
      //id_disciplines/:id_turma/:id_test
      const {id_user,id_type}=request.params;
      const results = await Test.query()
        .select("test.id as id_test","test.name as nameProva","test.id_type","test.note")
        .select("u.first_name","u.last_name")
        .select("c.id as id_classe","c.teacher","c.link","c.name as turma")
        .select("d.id as id_disciplines","d.name as name_discipline","d.description as discipline_description")
        .innerJoin('classes as c', 'test.id_classes', 'c.id')
        .innerJoin('users as u', 'c.teacher', 'u.id')
        .innerJoin("disciplines as d","c.discipline_id","d.id")
        .innerJoin("questions as q","test.id","q.id_test")
        .innerJoin("answers as a","q.id_questions","a.id_questions")
        .where("q.id_type",id_type)
        .where("u.id", id_user)
      if(results!=""){
        return response.status(200).json(results);
      }
        return response.status(404).send("Informação não encontrada");

    } catch (error) {
      next(error);
    }

  },
  // async checkChoiceTest(request, response, next) {
  //   try {
  //     //id_disciplines/:id_turma/:id_test
  //     const {id_discipline, id_user,id_test,id_test_type}=request.params;

  //     const results = await Test.query()
  //       .select("test.id as id_test","test.name as nameProva","test.id_type","test.note")//"u.first_name","u.last_name","c.teacher","link","c.name as turma"
  //       .select("u.first_name","u.last_name")
  //       .select("c.id as id_classe","c.teacher","c.link","c.name as turma")
  //       .select("d.id as id_disciplines","d.name as name_discipline","d.description as discipline_description")
  //       .innerJoin('classes as c', 'test.id_classes', 'c.id')
  //       .innerJoin('users as u', 'c.teacher', 'u.id')
  //       .innerJoin("disciplines as d","c.discipline_id","d.id")
  //       .where("u.id", id_user)
  //       .where("formation","Aluno");
  //     if(results!=""){
  //       return response.status(200).json(results);
  //     }
  //       return response.status(404).send("Informação não encontrada");

  //   } catch (error) {
  //     next(error);
  //   }

  // },
  // async checkSimpleTest(request, response, next) {
  //   try {
  //     //id_disciplines/:id_turma/:id_test
  //     const {id_discipline, id_user,id_test,id_test_type}=request.params;

  //     const results = await Test.query()
  //       .select("test.id as id_test","test.name as nameProva","test.id_type","test.note")//"u.first_name","u.last_name","c.teacher","link","c.name as turma"
  //       .select("u.first_name","u.last_name")
  //       .select("c.id as id_classe","c.teacher","c.link","c.name as turma")
  //       .select("d.id as id_disciplines","d.name as name_discipline","d.description as discipline_description")
  //       .innerJoin('classes as c', 'test.id_classes', 'c.id')
  //       .innerJoin('users as u', 'c.teacher', 'u.id')
  //       .innerJoin("disciplines as d","c.discipline_id","d.id")
  //       .where("u.id", id_user)
  //       .where("formation","Aluno");
  //     if(results!=""){
  //       return response.status(200).json(results);
  //     }
  //       return response.status(404).send("Informação não encontrada");

  //   } catch (error) {
  //     next(error);
  //   }

  // },
  



}