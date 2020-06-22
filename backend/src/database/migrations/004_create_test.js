exports.up = function(knex) {
    return knex.schema.createTable('test', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.integer('id_type').notNullable();

        table.integer('id_classes').unsigned();

        table.foreign('id_classes')
            .references('id')
            .inTable('classes')
            .onDelete('CASCADE')
            .onUpdate('NO ACTION');


    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('test');
};