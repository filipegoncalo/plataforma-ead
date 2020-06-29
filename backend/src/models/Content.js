const { Model } = require('objection');
const knex = require('../database');

Model.knex(knex)

class Content extends Model {
  static get tableName() {
    return 'contents';
  }
}

module.exports = Content;