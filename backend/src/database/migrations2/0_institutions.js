import Knex from 'knex';
exports.up = function(knex) {
    return knex.schema.createTable('institutions', (table) => {
        table.increments('id').primary();
        table.string('institutions').notNullable();
        table.integer('function').notNullable();
        table.string('status').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('institutions');
};
