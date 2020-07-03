
exports.up = function (knex) {
  return knex.schema.createTable('schedules', (table) => {
    table.increments('id').primary();
    table.integer('user_id').unsigned();
    table.integer('discipline_id').unsigned();
    table.integer('classe_id').unsigned();
    table.date('start').notNullable();
    table.date('end').notNullable();

    table.foreign('user_id')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('NO ACTION');

    table.foreign('discipline_id')
      .references('id')
      .inTable('disciplines');

    table.foreign('classe_id')
      .references('id')
      .inTable('classes');

    table.timestamp('created_at')
      .defaultTo(knex.fn.now())
      .notNullable();

    table.timestamp('updated_at')
      .defaultTo(knex.fn.now())
      .nullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('schedules');
};
