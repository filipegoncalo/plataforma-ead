const User = require('../models/User');
const Discipline = require('../models/Discipline');

module.exports = {
  
  async index(request, response, next) {
    const teacher_id = request.headers.authorization;
    
    try {
      const user = await User.query().findById(teacher_id);

      if (!user) {
        return response.status(404).json({ error: "User doesn't exist" });
      }
      if(user.id == teacher_id){
        const disciplines = await Discipline.query().select('name').where('teacher', teacher_id);
        return response.jsonSuccess(disciplines);
      }

      return response.status(401).json({ error: 'Operation not permited.' });

    } catch (error) {
      next(error);
    }

  },

  async create(request, response, next) {
    const { name, institution, description } = request.body;
    const teacher_id = request.headers.authorization;

    try {
      const user = await User.query().findById(teacher_id);

      if (!user) {
        return response.status(404).json({ error: "User doesn't exist" });
      }

      if(user.id == teacher_id){
        const discipline = await Discipline.query().insert({
          teacher: user.id,
          name,
          institution,
          description
        });

        return response.status(201).json({ message: "Discipline successfully registered" });
      }

      return response.status(401).json({ error: 'Operation not permited.' });

    } catch (error) {
      next(error);
    }
  },

  async update(request, response, next) {
    const { name, institution, description } = request.body;
    const { id } = request.params;
    const teacher_id = request.headers.authorization;

    //date update
    const updateAt = new Date();
    
    try {
      const user = await User.query().findById(teacher_id);
      let discipline = await Discipline.query().findById( id );

      if (!user) {
        return response.status(404).json({ error: "User doesn't exist" });
      }

      if (!discipline) {
        return response.status(404).json({ error: "Discipline does not exist" });
      }

      if(discipline.teacher == teacher_id && discipline.id == id ){
        discipline = await Discipline.query().patch({
          name,
          institution,
          description,
          updated_at: updateAt
        }).where( {id} );

        return response.status(201).json({ message: "Discipline updated successfully" });
      }

      return response.status(401).json({ error: 'Operation not permited.' });

    } catch (error) {

    }
  },

  async delete(request, response, next) {
    const { id } = request.params;
    const teacher_id = request.headers.authorization;
    
    try {
      const user = await User.query().findById(teacher_id);
      let discipline = await Discipline.query().findById( id );

      if (!user) {
        return response.status(404).json({ error: "User doesn't exist" });
      }

      if (!discipline) {
        return response.status(404).json({ error: "Discipline does not exist" });
      }

      if(discipline.teacher == teacher_id && discipline.id == id ){
        discipline = await Discipline.query().deleteById( id );

        return response.status(201).json({ message: "Discipline successfully deleted" });
      }

      return response.status(401).json({ error: 'Operation not permited.' });

    } catch (error) {
      next(error);
    }
  }
}