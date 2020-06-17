const { Model } = require('objection');
const knex = require('../database');

Model.knex(knex)

class Discipline extends Model {
  static get tableName() {
    return 'disciplines';
  }
}

module.exports = Discipline;