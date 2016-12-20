exports.seed = function(knex) {
  return knex('meals').del()
    .then(() => {
      return knex('meals').insert([{
        restaurant_id: 1,
        user_id: null,
        name: 'Salmon',
        details: 'Salmon filet on a bed of sauteed kale.',
        dietary: 'gluten-free, dairy-free',
        pickup: 'Before close',
        price: 4.99
      },
      {
        restaurant_id: 2,
        user_id: null,
        name: 'Ranch Burger',
        details: 'All beef burger from a local farmer, cheddar cheese, and fresh bread.',
        dietary: 'can request gluten-free bun.',
        pickup: 'Aftter 7 pm',
        price: 6.99
      },
      {
        restaurant_id: 3,
        user_id: null,
        name: 'BBQ Pork Sandwich',
        details: 'All beef brisket with homemade BBQ sauce and macaroni or cole-slaw side.',
        dietary: 'can request gluten-free bun, sandwich is dairy-free',
        pickup: 'Aftter 7 pm',
        price: 4.99
      }]);
    });
};
