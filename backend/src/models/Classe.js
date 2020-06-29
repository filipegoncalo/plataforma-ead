const { Model } = require('objection');
const knex = require('../database');

Model.knex(knex)

class Classe extends Model {
  static get tableName() {
    return 'classes';
  }
}

module.exports = Classe;