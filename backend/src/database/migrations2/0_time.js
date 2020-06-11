import Knex from 'knex';
exports.up = function(knex) {
    return knex.schema.createTable('time', (table) => {
        table.increments('id').primary();
        table.string('day').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('time');
};
