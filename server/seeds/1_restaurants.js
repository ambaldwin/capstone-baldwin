exports.seed = function(knex) {
  return knex('restaurants').del()
    .then(() => {
      return knex('restaurants').insert([{
        name: 'River and Woods',
        username: 'riverandwoods',
        email: 'raw@gmail.com',
        hash: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',
        image: 'http://gracefullplate.com/wp-content/uploads/2016/09/Screen-Shot-2016-09-22-at-11.27.35-AM-550x354.png',
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
        image: 'https://www.boulderdowntown.com/_files/images/kitchennextdoor_storefront_2015.jpg',
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

// {
//   name: 'Pasta Jays',
//   username: 'pastajays',
//   email: 'pasta@gmail.com',
//   hash: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',
//   image: 'http://friendsofpastajay.com/wp-content/uploads/2010/05/pj2.jpg',
//   pounds: 2800,
//   phone: '3082365594',
//   address: '1001 Pearl St',
//   city: 'Boulder',
//   state: 'CO',
//   zip: 80302
// },
// {
//   name: 'Jax Fish House',
//   username: 'jaxfishhouse',
//   email: 'jax@gmail.com',
//   hash: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',
//   image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSh3tlvlh1n_heodjHACoxIOyMvR9PWXmVzUrftHrecY1SOzgQtSA',
//   pounds: 2200,
//   phone: '3082365594',
//   address: '928 Pearl St',
//   city: 'Boulder',
//   state: 'CO',
//   zip: 80302
// },
// {
//   name: 'Arcana',
//   username: 'arcana',
//   email: 'arcana@gmail.com',
//   hash: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',
//   image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIsPA3kppjNmGnEcW378mARQz7aa6Uwf9yXDvVZkrpAYsGAdKx',
//   pounds: 2100,
//   phone: '3082365594',
//   address: '909 Walnut St',
//   city: 'Boulder',
//   state: 'CO',
//   zip: 80302
// },
// {
//   name: 'The Mediterranean Restaurant',
//   username: 'med',
//   email: 'med@gmail.com',
//   hash: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',
//   image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHgrHYEpOBU7LYi51RDEIEHsDRClTyEWSLzp9YcFsXs4iFQlIb',
//   pounds: 2100,
//   phone: '3082365594',
//   address: '1002 Walnut S',
//   city: 'Boulder',
//   state: 'CO',
//   zip: 80302
// },
// {
//   name: 'Taco',
//   username: 'taco',
//   email: 'taco@gmail.com',
//   hash: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',
//   image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7FvufpkFKeul0RGE3-10v0EBHrWeVECtNcmP03WFpd96fF08l',
//   pounds: 2100,
//   phone: '3082365594',
//   address: '1175 Walnut St',
//   city: 'Boulder',
//   state: 'CO',
//   zip: 80302
// },
