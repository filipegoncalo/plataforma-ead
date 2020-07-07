const { Model } = require('objection');
const knex = require('../database');

Model.knex(knex)

class classesSchedules extends Model {
  static get tableName() {
    return 'classes_schedules';
  }
}

module.exports = classesSchedules;