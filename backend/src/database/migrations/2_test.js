
exports.up = function(knex) {
    return knex.schema.createTable('test', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.integer('id_type').notNullable();

        table.integer('id_disciplines').unsigned();

        table.foreign('id_disciplines')
            .references('id')
            .inTable('disciplines')
            .onDelete('CASCADE')
            .onUpdate('NO ACTION');


    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('questions');
};
