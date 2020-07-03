const { Model } = require('objection');
const knex = require('../database');

Model.knex(knex)

class studentClasses extends Model {
  static get tableName() {
    return 'student_classes';
  }
}

module.exports = studentClasses;