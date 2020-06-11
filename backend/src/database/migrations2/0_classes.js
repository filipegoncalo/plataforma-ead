import Knex from 'knex';
exports.up = function(knex) {
    return knex.schema.createTable('classes', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('schedule').notNullable();
        table.string('id_screen').notNullable();
        table.date('period').notNullable();
        table.string('email').notNullable();
        table.string('id_on').notNullable();

        
        table.timestamp('created_at')
            .defaultTo(knex.fn.now())
            .notNullable();

        table.timestamp('updated_at')
            .defaultTo(knex.fn.now())
            .nullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('classes');
};
