const { Model } = require('objection');
const knex = require('../database');

Model.knex(knex)

class Answer extends Model {
  static get tableName() {
    return 'answers';
  }
}

module.exports = Answer;