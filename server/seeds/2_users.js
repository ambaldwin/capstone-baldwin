exports.seed = function(knex) {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([{
        name: 'Anna Baldwin',
        username: 'ambaldwin',
        email: 'anna@gmail.com',
        hash: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',
        phone: '3082931666'
      },
      {
        name: 'Ben Fox',
        username: 'bdfox',
        email: 'ben@gmail.com',
        hash: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',
        phone: '6092262550'
      }]);
    });
};
