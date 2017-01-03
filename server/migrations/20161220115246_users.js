exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('name').notNullable();
    table.string('username').notNullable().unique();
    table.string('email').unique()
    table.specificType('hash', 'character(60)')
    table.string('phone')
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
