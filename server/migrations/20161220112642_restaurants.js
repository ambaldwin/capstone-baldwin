exports.up = function(knex) {
  return knex.schema.createTable('restaurants', (table) => {
    table.increments();
    table.string('name').notNullable();
    table.string('username').notNullable().unique();
    table.string('email').unique()
    table.specificType('hash', 'character(60)')
    table.string('image')
    table.string('phone')
    table.string('address');
    table.string('city',50).notNullable();
    table.string('state',2).notNullable();
    table.integer('zip',5).notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('restaurants');
};
