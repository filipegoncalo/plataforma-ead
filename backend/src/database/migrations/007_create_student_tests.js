
exports.up = function (knex) {
  return knex.schema.createTable('classes_schedules', (table) => {
    table.integer('student_id').unsigned();
    table.integer('tests_id').unsigned();

    table.foreign('student_id')
      .references('id')
      .inTable('users');

    table.foreign('tests_id')
      .references('id')
      .inTable('tests');

  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('classes_schedules');
};