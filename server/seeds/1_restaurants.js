exports.seed = function(knex) {
  return knex('restaurants').del()
    .then(() => {
      return knex('restaurants').insert([{
        name: 'River and Woods',
        username: 'riverandwoods',
        email: 'raw@gmail.com',
        hash: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',
        image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQsqrwZ5T_GDsItvZxuLshRuNqx9fLdfAAIW-yj7GgF4PP6FLpqZA',
        pounds: 2700,
        phone: '3082365594',
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
        image: 'http://images.elephantjournal.com/wp-content/uploads/2011/06/Screen-shot-2011-06-14-at-1.57.12-PM.png',
        pounds: 3000,
        phone: '3082365594',
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
        pounds: 2500,
        phone: '3082365594',
        address: '926 Pearl Street',
        city: 'Boulder',
        state: 'CO',
        zip: 80302,
        },
        {
          name: 'Pizzeria Locale',
          username: 'pizzeria',
          email: 'pizzeria@gmail.com',
          hash: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSUzunonZHq89hbBvrVEhB341oyHHBcFM2xjLkcdMH95aVdbLMHg',
          pounds: 2100,
          phone: '3082365594',
          address: '1730 Pearl St',
          city: 'Boulder',
          state: 'CO',
          zip: 80302
        }]);
    });
};
