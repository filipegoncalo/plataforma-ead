
exports.up = function(knex) {
    return knex.schema.createTable('questions', (table) => {
        table.increments('id').primary();
        table.string('ds_description').notNullable();

        table.integer('id_test').unsigned();

        table.foreign('id_test')
            .references('id')
            .inTable('test')
            .onDelete('CASCADE')
            .onUpdate('NO ACTION');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('questions');
};
