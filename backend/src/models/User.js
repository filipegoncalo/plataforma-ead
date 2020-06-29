const { Model } = require('objection');
const knex = require('../database');

Model.knex(knex)

class User extends Model {
  static get tableName() {
    return 'users';
  }

  static get relationMappings() {

    const Discipline = require('./Discipline');
    const Content = require('./Content');
    const Classe = require('./Classe');

    return {
      disciplines: {
        relation: Model.HasManyRelation,
        modelClass: Discipline,
        join: {
          from: 'users.id',
          to: 'disciplines.teacher'
        }
      },
      contents: {
        relation: Model.HasManyRelation,
        modelClass: Content,
        join: {
          rom: 'users.id',
          to: 'content.teacher'
        }
      },
      classes: {
        relation: Model.HasManyRelation,
        modelClass: Classe,
        join: {
          from: 'users.id',
          to: 'classes.teacher'
        }
      },

    };

  }

}

module.exports = User;