const { Model } = require('objection');
const knex = require('../database');

Model.knex(knex)

class Schedule extends Model {
  static get tableName() {
    return 'schedules';
  }
}

module.exports = Schedule;