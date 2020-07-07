
exports.up = function (knex) {
  return knex.schema.createTable('student_classes', (table) => {
    table.integer('student_id').unsigned();
    table.integer('classe_id').unsigned();

    table.foreign('student_id')
      .references('id')
      .inTable('users');

    table.foreign('classe_id')
      .references('id')
      .inTable('classes');

  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('student_classes');
};