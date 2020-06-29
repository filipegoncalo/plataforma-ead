exports.up = function (knex) {
    return knex.schema.createTable('questions', (table) => {
        table.increments('id').primary();
        table.integer('teacher').unsigned();
        table.integer('discipline_id').unsigned();
        table.integer('test_id').unsigned();
        table.string('description').notNullable();
        table.text("answer").notNullable();

        table.foreign('teacher')
            .references('id')
            .inTable('users');

        table.foreign('discipline_id')
            .references('id')
            .inTable('disciplines');


        table.foreign('test_id')
            .references('id')
            .inTable('tests')
            .onDelete('CASCADE')
            .onUpdate('NO ACTION');

        table.timestamp('created_at')
            .defaultTo(knex.fn.now())
            .notNullable();

        table.timestamp('updated_at')
            .defaultTo(knex.fn.now())
            .nullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('questions');
};