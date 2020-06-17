exports.up = function (knex) {
  return knex.schema.createTable('disciplines', (table) => {
    table.increments('id').primary();
    table.integer('teacher').unsigned();
    table.string('name').notNullable();
    table.string('institution').notNullable();
    table.text('description').notNullable();

    table.foreign('teacher')
      .references('id')
      .inTable('users')
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

exports.down = function (knex) {
  return knex.schema.dropTable('disciplines');
};