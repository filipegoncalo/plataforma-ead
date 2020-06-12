
exports.up = function(knex) {
    return knex.schema.createTable('classes', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.date('schedule').notNullable();
        table.integer('teacher_id').unsigned();
        table.integer('discipline_id').unsigned();
        table.integer('user_id').unsigned();

        table.foreign('teacher_id')
            .references('id')
            .inTable('teachers')
            .onDelete('CASCADE')
            .onUpdate('NO ACTION');

        table.foreign('discipline_id')
            .references('id')
            .inTable('disciplines');

        table.foreign('user_id')
            .references('id')
            .inTable('users');

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
