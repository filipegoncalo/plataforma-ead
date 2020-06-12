
exports.up = function(knex) {
    return knex.schema.createTable('emblem', (table) => {
        table.increments('id').primary();
        table.string('emblem').notNullable();
        table.integer('id_users').unsigned();

        table.foreign('id_users')
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
    return knex.schema.dropTable('emblem');
};
