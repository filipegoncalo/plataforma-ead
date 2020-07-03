const { Model } = require('objection');
const knex = require('../database');

Model.knex(knex)

class studentTest extends Model {
  static get tableName() {
    return 'student_test';
  }
}

module.exports = studentTest;