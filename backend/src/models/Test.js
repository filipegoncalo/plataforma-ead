const { Model } = require('objection');
const knex = require('../database');

Model.knex(knex)

class Test extends Model {
  static get tableName() {
    return 'tests';
  }
}

module.exports = Test;