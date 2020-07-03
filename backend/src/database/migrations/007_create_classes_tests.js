
exports.up = function (knex) {
  return knex.schema.createTable('classes_tests', (table) => {
    table.integer('classe_id').unsigned();
    table.integer('test_id').unsigned();

    table.foreign('classe_id')
      .references('id')
      .inTable('classes')
      .onDelete('CASCADE')
      .onUpdate('NO ACTION');

    table.foreign('test_id')
      .references('id')
      .inTable('tests');

  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('classes_tests');
};