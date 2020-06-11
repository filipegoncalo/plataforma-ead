import Knex from 'knex';
exports.up = function(knex) {
    return knex.schema.createTable('time_classes', (table) => {

        table.integer('id_time').unsigned();
        table.integer('id_classes').unsigned();

        table.foreign('id_time')
            .references('id')
            .inTable('time')
            .onDelete('CASCADE')
            .onUpdate('NO ACTION');

            table.foreign('id_classes')
                .references('id')
                .inTable('classes')
                .onDelete('CASCADE')
            .onUpdate('NO ACTION');



    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('disciplines_classes');
};
