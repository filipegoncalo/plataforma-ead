const Discipline = require('../models/Discipline');
const Test = require('../models/Test');

module.exports = {
  async byDiscipline(request, response) {
    const { userId } = request;
    const { discipline_id } = request.headers;

    const discipline = await Discipline.query().findById(discipline_id);

    if (!discipline) return response.jsonNotFound(null, 'Disciplina não existe');

    if (discipline.teacher === userId) {

      const testes = await Test.query().select('*').where('teacher', userId).where('discipline_id', discipline_id);

      return response.jsonSuccess(testes);
    }

    return response.jsonUnauthorized();
  },

  async byTeacher(request, response) {
    const { userId: teacher } = request;

    const testes = await Test.query().select('*').where('teacher', teacher);

    return response.jsonSuccess(testes);
  },

  async create(request, response) {
    const { userId } = request;
    const { discipline_id } = request.headers;
    const { name, type, note } = request.body;

    const discipline = await Discipline.query().findById(discipline_id);

    if (!discipline) return response.jsonNotFound(null, "Discipline não existe");

    const newClasse = await Test.query().insert({
      teacher: userId,
      discipline_id: discipline.id,
      name,
      type,
      note
    });
    return response.jsonSuccess(newClasse);
  },

  async update(request, response) {
    const { id } = request.params;
    const { userId } = request;
    const { body } = request;

    const fields = ['name', 'type', 'note'];

    const test = await Test.query().findById(id);

    if (!test) return response.jsonNotFound(null, "Turma não existe");

    console.log(test)


    fields.map((fieldName) => {
      const newValue = body[fieldName];
      if (newValue !== undefined) test[fieldName] = newValue;

    });

    test.updated_at = new Date();

    if (test.teacher === userId) {

      const upTest = await Test.query().patch(test).where('id', id).where('teacher', userId);

      return response.jsonSuccess(upTest);
    }
    return response.jsonUnauthorized();

  },

  async delete(request, response) {
    const { id } = request.params;
    const { userId } = request;

    const test = await Test.query().findById(id);

    console.log(id, userId, test)

    if (!test) return response.jsonNotFound(null, "Turma não existe");

    if (test.teacher === userId) {
      const delTest = await Test.query().delete().where('id', id).where('teacher', userId);;

      return response.jsonSuccess(delTest);
    }

    return response.jsonUnauthorized();
  }
}