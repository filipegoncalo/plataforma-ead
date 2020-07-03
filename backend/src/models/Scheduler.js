const { Model } = require('objection');
const knex = require('../database');

Model.knex(knex)

class Scheduler extends Model {
  static get tableName() {
    return 'schedules';
  }
}

module.exports = Scheduler;