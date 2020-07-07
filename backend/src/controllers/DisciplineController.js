const User = require('../models/User');
const Discipline = require('../models/Discipline');

module.exports = {

  async show(request, response, next) {
    const { userId } = request;

    try {
      const user = await User.query().findById(userId);

      if (!user) return response.jsonUnauthorized();

      const disciplines = await Discipline.query().select('*').where('teacher', userId);
      return response.jsonSuccess(disciplines);

    } catch (error) {
      return response.jsonUnauthorized();
    }

  },

  async create(request, response, next) {
    const { name, institution, description } = request.body;
    const { userId } = request;

    try {
      const user = await User.query().findById(userId);

      if (!user) {
        return response.status(404).json({ error: "User doesn't exist" });
      }

      const discipline = await Discipline.query().insert({
        teacher: userId,
        name,
        institution,
        description
      });

      return response.status(201).json({ message: "Discipline successfully registered" });


      return response.status(401).json({ error: 'Operation not permited.' });

    } catch (error) {
      next(error);
    }
  },

  async update(req, response, next) {
    const { body} = req;
    const { id } = req.params;
    const { userId } = req;

    console.log( body, id, userId)

    const fields = [ 'name', 'institution', 'description' ]

    const discipline = await Discipline.query().findById(id);

    console.log(discipline)

    if (!discipline) return response.jsonBadRequest(null, 'Disciplina não existe');

    fields.map((fieldName) => {
      const newValue = body[fieldName];
      console.log(newValue)
      if (newValue !== undefined) discipline[fieldName] = newValue;
    });

    console.log(discipline)
    
    if (discipline.teacher == userId && discipline.id == id) {
      
      const updateDiscipline = await Discipline.query().patch( discipline ).where({ id });

      console.log(updateDiscipline)

      return response.status(201).jsonSuccess(updateDiscipline);
    }

    return response.jsonUnauthorized();
  },

  async delete(request, response, next) {
    const { id } = request.params;
    const teacher_id = request.headers.authorization;

    try {
      const user = await User.query().findById(teacher_id);
      let discipline = await Discipline.query().findById(id);

      if (!user) {
        return response.status(404).json({ error: "User doesn't exist" });
      }

      if (!discipline) {
        return response.status(404).json({ error: "Discipline does not exist" });
      }

      if (discipline.teacher == teacher_id && discipline.id == id) {
        discipline = await Discipline.query().deleteById(id);

        return response.status(201).json({ message: "Discipline successfully deleted" });
      }

      return response.status(401).json({ error: 'Operation not permited.' });

    } catch (error) {
      next(error);
    }
  }
}