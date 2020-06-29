exports.up = function (knex) {
    return knex.schema.createTable('answers', (table) => {
        table.increments('id').primary();
        table.integer('student_id').unsigned();
        table.integer('questions_id').unsigned();
        table.string('answer', 500).notNullable();

        table.foreign('student_id')
            .references('id')
            .inTable('users');

        table.foreign('questions_id')
            .references('id')
            .inTable('questions')
            .onDelete('CASCADE')
            .onUpdate('NO ACTION');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('answers');
};