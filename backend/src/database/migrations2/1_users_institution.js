import Knex from 'knex';
exports.up = function(knex) {
    return knex.schema.createTable('users_institutions', (table) => {

        table.integer('id_institutions').unsigned();
        table.integer('id_users').unsigned();

        table.foreign('id_users')
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('NO ACTION');

            table.foreign('id_institutions')
                .references('id')
                .inTable('institutions')
                .onDelete('CASCADE')
            .onUpdate('NO ACTION');

    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('users_institutions');
};
