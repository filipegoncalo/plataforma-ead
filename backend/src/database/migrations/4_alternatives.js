
exports.up = function(knex) {
    return knex.schema.createTable('alternatives', (table) => {
        table.increments('id').primary();
        table.string('ds_alternative',500).notNullable();

        table.integer('id_questions').unsigned();

        table.foreign('id_questions')
            .references('id')
            .inTable('questions')
            .onDelete('CASCADE')
            .onUpdate('NO ACTION');


    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('alternatives');
};
