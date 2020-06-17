const Discipline = require('../models/Discipline');
const Classe = require('../models/Classe');

module.exports = {
  async byDiscipline(request, response, next) {
    const discipline_id = request.headers.authorization;

    try {
      const discipline = await Discipline.query().findById(discipline_id);

      if (!discipline) {
        return response.status(404).json({ error: "Discipline doesn't exist" });
      }
      if(discipline.id == discipline_id){
        const classes = await Classe.query().select('name').where('discipline_id', discipline_id);
        return response.status(201).json(classes);
      }

      return response.status(401).json({ error: 'Operation not permited.' });

    } catch (error) {
      next(error);
    }

  },

  async create(request, response, next) {
    const { link, name, schedule } = request.body;
    const discipline_id = request.headers.authorization;

    const parts = schedule.split(" ");
    const date = parts[0].split("/");
    const hour = parts[1].split(":");
    const dt = new Date(date[2], date[1] - 1, date[0], hour[0], hour[1], hour[2]);

    try {
      const discipline = await Discipline.query().findById(discipline_id);
      
      if(!discipline){
        return response.status(404).json({ error: "Discipline does not exist" });
      }

      if (discipline.id == discipline_id ) {
        const classe = await Classe.query().insert({
          teacher: discipline.teacher,
          discipline_id: discipline.id,
          link,
          name,
          schedule: dt
        });

        return response.status(201).json({ message: "Class created successfully" });
      }

      return response.status(401).json({ error: 'Operation not permited.' });

    } catch (error) {
      next(error);
    }
  },

  async update(request, response, next) {
    const { link, name, schedule } = request.body;
    const { id } = request.params;
    const discipline_id = request.headers.authorization;

    //date update
    const parts = schedule.split(" ");
    const date = parts[0].split("/");
    const hour = parts[1].split(":");
    const dt = new Date(date[2], date[1] - 1, date[0], hour[0], hour[1], hour[2]);
    const updateAt = new Date();
    
    try {
      const discipline = await Discipline.query().findById(discipline_id);
      let classe = await Classe.query().findById( id );

      if (!discipline) {
        return response.status(404).json({ error: "Discipline doesn't exist" });
      }

      if (!classe) {
        return response.status(404).json({ error: "Classe does not exist" });
      }

      if(classe.discipline_id == discipline_id ){
        classe = await Classe.query().patch({
          link,
          name,
          schedule: dt,
          updated_at: updateAt
        }).where( {id} );

        return response.status(201).json({ message: "Discipline updated successfully" });
      }

      return response.status(401).json({ error: 'Operation not permited.' });

    } catch (error) {
      next(error);
    }
  },

  async delete(request, response, next) {
    const { id } = request.params;
    const discipline_id = request.headers.authorization;
    
    try {
      const discipline = await Discipline.query().findById(discipline_id);
      let classe = await Classe.query().findById( id );

      if (!discipline) {
        return response.status(404).json({ error: "discipline doesn't exist" });
      }

      if (!classe) {
        return response.status(404).json({ error: "classe does not exist" });
      }

      if(classe.discipline_id == discipline_id ){
        classe = await Classe.query().deleteById( id );

        return response.status(201).json({ message: "Discipline successfully deleted" });
      }

      return response.status(401).json({ error: 'Operation not permited.' });

    } catch (error) {
      next(error);
    }
  }
}