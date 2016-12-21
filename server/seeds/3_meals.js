exports.seed = function(knex) {
  return knex('meals').del()
    .then(() => {
      return knex('meals').insert([{
        restaurant_id: 1,
        user_id: null,
        name: 'Chicken Fried Calamari Steak',
        details: 'Buttermilk brined wild caught Humboldt squid, lemon pepper aioli, Ozuke collard green kimchi. Creamed kale side.',
        dietary: 'gluten-free',
        pickup: 'Before close',
        image: 'https://s-media-cache-ak0.pinimg.com/236x/e4/c5/b1/e4c5b17bef3fcd8bb113a27f5faa2ca8.jpg',
        price: 5.99
      },
      {
        restaurant_id: 2,
        user_id: null,
        name: 'Next Door Beet Burger',
        details: 'Local beet, and topped with arugula, balsamic onions, and feta.',
        dietary: 'Vegetarian and can request gluten-free bun.',
        pickup: 'Aftter 7 pm',
        image: 'http://cf.shelikesfood.com/wp-content/uploads/2014/08/Amys-3422-683x1024.jpg',
        price: 3.99
      },
      {
        restaurant_id: 3,
        user_id: null,
        name: 'Buffalo Chicken Sandwich',
        details: 'Housemade pickles, blue cheese crumbles, and ranch dressing. Collard Greens side.',
        dietary: 'can request gluten-free bun.',
        pickup: 'Aftter 7 pm',
        image: 'http://img.sndimg.com/food/image/upload/w_614,h_461,c_fit/v1/img/recipes/29/21/66/HC20RL1qSyCTtcXM8UBB_buffalo-chicken-sandwich-5755.jpg',
        price: 5.99
      }]);
    });
};
