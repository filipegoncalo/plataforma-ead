const User = require('../models/User');
const Discipline = require('../models/Discipline');

module.exports = {

  async show(request, response) {
    const { userId } = request;

    const user = await User.query().findById(userId);

    if (!user) return response.jsonNotFound(null, 'Usuario não existe');

    const disciplines = await Discipline.query().select('*').where('teacher', userId);
    return response.jsonSuccess(disciplines);


  },

  async create(request, response) {
    const { name, institution, description } = request.body;
    const { userId } = request;

    const discipline = await Discipline.query().insert({
      teacher: userId,
      name,
      institution,
      description
    });

    return response.jsonSuccess(discipline);

  },

  async update(resquest, response) {
    const { id } = resquest.params;
    const { userId } = resquest;
    const { body } = resquest;

    const fields = ['name', 'institution', 'description'];

    if (!body) return response.jsonBadRequest(null, 'Não existe dados para atualizar');

    const discipline = await Discipline.query().findById(id);

    if (!discipline) return response.jsonNotFound(null, 'Disciplina não existe');

    fields.map((fieldName) => {
      const newValue = body[fieldName];
      if (newValue !== undefined) discipline[fieldName] = newValue;
    });

    discipline.updated_at = new Date();

    if (discipline.teacher === userId) {
      const updateDiscipline = await Discipline.query().patch(discipline).where('id', id).where('teacher', userId);

      return response.jsonSuccess(updateDiscipline);

    }
    return response.jsonUnauthorized();

  },

  async delete(request, response) {
    const { id } = request.params;
    const { userId } = request;

    const discipline = await Discipline.query().findById(id);

    if (!discipline) return response.jsonNotFound(null, 'Disciplina não existe');

    if (discipline.teacher === userId) {
      const delDiscipline = await Discipline.query().delete().where('id', id).where('teacher', userId);

      return response.jsonSuccess(delDiscipline);
    }

    return response.jsonUnauthorized();
  }
}