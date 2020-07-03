const { Model } = require('objection');
const knex = require('../database');

Model.knex(knex)

class classeTests extends Model {
  static get tableName() {
    return 'classes_tests';
  }
}

module.exports = classeTests;