//modificar teacher id

exports.up = function(knex) {
    return knex.schema.createTable('content', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.text('description').notNullable();
        table.integer('id_classes').unsigned();

        table.foreign('id_classes')
            .references('id')
            .inTable('classes')
            .onDelete('CASCADE')
            .onUpdate('NO ACTION');
        
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('content'); 
};