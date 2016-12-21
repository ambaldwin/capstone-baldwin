exports.seed = function(knex) {
  return knex('restaurants').del()
    .then(() => {
      return knex('restaurants').insert([{
        name: 'River and Woods',
        username: 'riverandwoods',
        email: 'raw@gmail.com',
        hash: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',
        image: 'http://gracefullplate.com/wp-content/uploads/2016/09/Screen-Shot-2016-09-22-at-11.27.35-AM-550x354.png',
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
        image: 'https://www.boulderdowntown.com/_files/images/kitchennextdoor_storefront_2015.jpg',
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
        image: 'https://pbs.twimg.com/profile_images/190695003/west_end_logo_blackback_400x400.gif',
        address: '926 Pearl Street',
        city: 'Boulder',
        state: 'CO',
        zip: 80302
      }]);
    });
};
