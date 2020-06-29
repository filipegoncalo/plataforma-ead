exports.up = function(knex) {
    return knex.schema.createTable('alternatives', (table) => {
        table.increments('id').primary();
        table.integer('questions_id').unsigned();
        table.string('alternative',500).notNullable();

        table.foreign('questions_id')
            .references('id')
            .inTable('questions')
            .onDelete('CASCADE')
            .onUpdate('NO ACTION');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('alternatives');
};