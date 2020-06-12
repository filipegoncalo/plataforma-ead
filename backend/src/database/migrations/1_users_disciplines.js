
exports.up = function(knex) {
    return knex.schema.createTable('users_disciplines', (table) => {

        table.integer('id_users').unsigned();
        table.integer('id_disciplines').unsigned();

        table.foreign('id_users')
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('NO ACTION');

            table.foreign('id_disciplines')
                .references('id')
                .inTable('disciplines')
                .onDelete('CASCADE')
            .onUpdate('NO ACTION');


    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('users_disciplines');
};
