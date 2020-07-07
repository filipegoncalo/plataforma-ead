
exports.up = function (knex) {
  return knex.schema.createTable('classes', (table) => {
    table.increments('id').primary();
    table.integer('teacher').unsigned();
    table.integer('discipline_id').unsigned();
    table.string('link').nullable();
    table.string('name').notNullable();
    table.string('institution').nullable();

    table.foreign('teacher')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('NO ACTION');

    table.foreign('discipline_id')
      .references('id')
      .inTable('disciplines');

    table.timestamp('created_at')
      .defaultTo(knex.fn.now())
      .notNullable();

    table.timestamp('updated_at')
      .defaultTo(knex.fn.now())
      .nullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('classes');
};
