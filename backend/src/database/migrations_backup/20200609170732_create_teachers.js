
exports.up = function(knex) {
    return knex.schema.createTable('teachers', (table) => {
        table.increments('id').primary();
        table.string('curriculum').notNullable();
        table.string('insignia').notNullable();
        table.integer('user_id').unsigned();

        table.foreign('user_id')
            .references('id')
            .inTable('users')
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

exports.down = function(knex) {
    return knex.schema.dropTable('teachers');
};
