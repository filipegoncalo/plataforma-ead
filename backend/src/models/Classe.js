const { Model } = require('objection');
const knex = require('../database');

Model.knex(knex)

class Classe extends Model {
  static get tableName() {
    return 'classes';
  }

  static get relationMappings() {

    const Test = require('./Test');
    const Scheduler = require('./Scheduler');
    const classesSchedules = require('./classesSchedules');
    const classesTests = require('./classesTests');

    return {
      test: {
        relation: Model.HasManyRelation,
        modelClass: Test,
        join: {
          from: 'classes.id',
          through: {
            modelClass: classesTests,
            from: 'classes_tests.classe_id',
            to: 'classes_tests.test_id'
          },
          to: 'tests.id'
        }
      },
      schedules: {
        relation: Model.ManyToManyRelation,
        modelClass: Scheduler,
        join: {
          from: 'classes.id',
          through: {
            modelClass: classesSchedules,
            from: 'classes_schedules.classe_id',
            to: 'classes_schedules.schedule_id'
          },
          to: 'schuedules.id'
        }
      },

    };

  }
}

module.exports = Classe;