
exports.up = function (knex) {
  return knex.schema.createTable('contents', (table) => {
    table.increments('id').primary();
    table.integer('teacher').unsigned();
    table.integer('discipline').unsigned();
    table.string('title').notNullable();
    table.text('subtitle').notNullable();
    table.text('content').notNullable();
    table.string('image').notNullable();
    table.integer('views', 11).notNullable();

    table.string('status', 20)
      .notNullable()
      .defaultTo('draft')
      .comment('post, draft, trash ');

    table.foreign('teacher')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('NO ACTION');

    table.foreign('discipline')
      .references('id')
      .inTable('disciplines');

    table.timestamp('post_at')
      .defaultTo(knex.fn.now())
      .nullable();

    table.timestamp('created_at')
    .defaultTo(knex.fn.now())
      .notNullable();

    table.timestamp('updated_at')
      .defaultTo(knex.fn.now())
      .notNullable();

    table.timestamp('delete_at').nullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('contents');
};