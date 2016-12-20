exports.seed = function(knex) {
  return knex('restaurants').del()
    .then(() => {
      return knex('restaurants').insert([{
        name: 'River and Woods',
        username: 'riverandwoods',
        email: 'raw@gmail.com',
        hash: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',
        address: '2328 Pearl Street',
        city: 'Boulder',
        state: 'CO',
        zip: 80302
      },
      {
        name: 'Kitchen Next Door',
        username: 'kitchennextdoor',
        email: 'knd@gmail.com',
        hash: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',
        address: '2035 Pearl Street',
        city: 'Boulder',
        state: 'CO',
        zip: 80302
      },
      {
        name: 'West End Tavern',
        username: 'westendtavern',
        email: 'wet@gmail.com',
        hash: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',
        address: '926 Pearl Street',
        city: 'Boulder',
        state: 'CO',
        zip: 80302
      }]);
    });
};
