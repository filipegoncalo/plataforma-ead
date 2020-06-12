
exports.up = function(knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments('id').primary();
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.string('email').unique().notNullable();

        table.string('genre', 10).nullable();
        table.date('datebirth').nullable();
        table.string('document', 11).nullable();

        table.string('password').notNullable();
        table.string('formation').nullable();
        table.string('curriculum').nullable();


        table.string('photo').nullable();
        table.integer('score').nullable();
        table.integer("profile").notNullable()
            .defaultTo(1);

        table.timestamp('created_at')
            .defaultTo(knex.fn.now())
            .notNullable();

        table.timestamp('updated_at')
            .defaultTo(knex.fn.now())
            .nullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
