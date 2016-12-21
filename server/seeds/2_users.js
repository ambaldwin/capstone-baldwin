exports.seed = function(knex) {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([{
        name: 'Anna Baldwin',
        username: 'ambaldwin',
        email: 'anna@gmail.com',
        hash: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',
        phone: '3082931666',
        image: 'https://scontent.xx.fbcdn.net/v/t1.0-9/15621761_10208344452831754_4528933582806650656_n.jpg?oh=a95dd75fd531aac7b9cc8fec0f22b137&oe=58DE4626'
      },
      {
        name: 'Ben Fox',
        username: 'bdfox',
        email: 'ben@gmail.com',
        hash: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',
        phone: '6092262550',
        image: 'https://scontent.xx.fbcdn.net/v/t1.0-9/15622671_10208344452871755_1208616421481522108_n.jpg?oh=3a6e11c682bf1a6d73801e961d5a36d6&oe=58E6C4BC'
      }]);
    });
};
