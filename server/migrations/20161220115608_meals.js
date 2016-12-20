exports.up = function(knex) {
  return knex.schema.createTable('meals', (table) => {
    table.increments();
    table.integer('restaurant_id')
      .notNullable()
      .references('id')
      .inTable('restaurants')
      .onDelete('CASCADE')
      .index();
    table.integer('user_id').defaultTo(null) //.nullable()
    table.string('name');
    table.string('details');
    table.string('dietary');
    table.string('pickup');
    table.decimal('price', 6, 2).notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('meals');
};
