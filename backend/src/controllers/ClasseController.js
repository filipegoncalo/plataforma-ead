const User = require('../models/User');
const Discipline = require('../models/Discipline');
const Classe = require('../models/Classe');

module.exports = {
  async byDiscipline(request, response) {
    const { userId } = request;
    const { discipline_id } = request.headers;

    const discipline = await Discipline.query().findById(discipline_id);

    if (!discipline) return response.jsonNotFound(null, 'Disciplina não existe');

    if (discipline.teacher != userId) return response.jsonUnauthorized();

    const classes = await Classe.query().select('*').where('teacher', userId).where('discipline_id', discipline_id);

    return response.jsonSuccess(classes);

  },

  async byTeacher(request, response) {
    const { userId: teacher } = request;

    const user = await User.query().findById(teacher);

    if (!user) return response.jsonNotFound(null);

    const classes = await Classe.query().select('*').where('teacher', teacher);

    return response.jsonSuccess(classes);
  },

  async create(request, response) {
    const { userId } = request;
    const { discipline_id } = request.headers;
    const { link, name, institution } = request.body;

    const discipline = await Discipline.query().findById(discipline_id);

    if (!discipline) return response.jsonNotFound(null, "Discipline não existe");

    const newClasse = await Classe.query().insert({
      teacher: userId,
      discipline_id: discipline.id,
      link,
      name,
      institution
    });
    return response.jsonSuccess(newClasse);
  },

  async update(request, response) {
    const { id } = request.params;
    const { userId } = request;
    const { body } = request;

    const fields = ['link', 'name', 'institution'];

    const classe = await Classe.query().findById(id);

    if (!classe) return response.jsonNotFound(null, "Turma não existe");

    fields.map((fieldName) => {
      const newValue = body[fieldName];
      if (newValue !== undefined) classe[fieldName] = newValue;
    });

    classe.updated_at = new Date();

    if (classe.teacher === userId) {

      const updateClasse = await Classe.query().patch(classe).where('id', id).where('teacher', userId);

      return response.jsonSuccess(updateClasse);
    }
    return response.jsonUnauthorized();
  },

  async delete(request, response) {
    const { id } = request.params;
    const { userId } = request;

    const classe = await Classe.query().findById(id);

    if (!classe) return response.jsonNotFound(null, "Turma não existe");

    if (classe.teacher === userId) {
      const delClasse = await Classe.query().delete().where('id', id).where('teacher', userId);;

      return response.jsonSuccess(delClasse);
    }

    return response.jsonUnauthorized();
  }
}