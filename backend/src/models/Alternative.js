const { Model } = require('objection');
const knex = require('../database');

Model.knex(knex)

class Alternatives extends Model {
  static get tableName() {
    return 'alternatives';
  }
}

module.exports = Alternatives;