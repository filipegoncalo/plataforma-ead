exports.up = function(knex) {
    return knex.schema.createTable('disciplines', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.text('description').notNullable();
        table.integer('teacher_id').unsigned()

        table.foreign('teacher_id')
            .references('id')
            .inTable('teachers')
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
    return knex.schema.dropTable('disciplines'); 
};