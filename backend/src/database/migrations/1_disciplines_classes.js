
exports.up = function(knex) {
    return knex.schema.createTable('disciplines_classes', (table) => {
        table.integer('id_disciplines').unsigned();
        table.integer('id_classes').unsigned();

        table.foreign('id_disciplines')
            .references('id')
            .inTable('disciplines')
            .onDelete('CASCADE')
            .onUpdate('NO ACTION');

            table.foreign('id_classes')
                .references('id')
                .inTable('classes')
                .onDelete('CASCADE')
            .onUpdate('NO ACTION');
        
        
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('disciplines_classes');
};
