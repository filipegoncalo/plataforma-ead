
exports.up = function (knex) {
  return knex.schema.createTable('classes_schedules', (table) => {

    table.integer('schedules_id').unsigned();
    table.integer('classes_id').unsigned();

    table.foreign('classes_id')
      .references('id')
      .inTable('classes')
      .onDelete('CASCADE')
      .onUpdate('NO ACTION');

    table.foreign('schedules_id')
      .references('id')
      .inTable('schedules');

  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('classes_schedules');
};