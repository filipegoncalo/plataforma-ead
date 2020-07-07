const { Model } = require('objection');
const knex = require('../database');

Model.knex(knex)

class Questions extends Model {
  static get tableName() {
    return 'questions';
  }
}

module.exports = Questions;