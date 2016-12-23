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
        restaurant_id: 1,
        user_id: null,
        name: 'Lamb & Oat Meatloaf',
        details: 'Triple m bar ranch lamb, grassfed beef, Elevation ketchup, pumpkin seed pesto, crispy sweet potato bites.',
        dietary: 'gluten-free options',
        pickup: 'Before close',
        image: 'http://personaltraininginmarin.com/wp-content/uploads/2012/08/lamb-turkey-bison-meatloaf1.jpg',
        price: 6.99
      },
      {
        restaurant_id: 2,
        user_id: null,
        name: 'Next Door Beet Burger',
        details: 'Local beet, and topped with arugula, balsamic onions, and feta.',
        dietary: 'Vegetarian and can request gluten-free bun.',
        pickup: 'Between 5 and 6 pm.',
        image: 'http://cf.shelikesfood.com/wp-content/uploads/2014/08/Amys-3422-683x1024.jpg',
        price: 3.99
      },
      {
        restaurant_id: 2,
        user_id: null,
        name: 'Pineapple Express Burger',
        details: 'Balsamic pineapple, swiss, bacon, arugula, and honey sriracha sauce.',
        dietary: 'Gluten Free',
        pickup: 'Between 5 and 6 pm.',
        image: 'http://img.sndimg.com/food/image/upload/w_614,h_461,c_fit/v1/img/recipes/50/13/14/picT2mM6u.jpg',
        price: 4.99
      },
      {
        restaurant_id: 3,
        user_id: null,
        name: 'Buffalo Chicken Sandwich',
        details: 'Housemade pickles, blue cheese crumbles, and ranch dressing. Collard Greens side.',
        dietary: 'can request gluten-free bun.',
        pickup: 'After 7 pm',
        image: 'http://img.sndimg.com/food/image/upload/w_614,h_461,c_fit/v1/img/recipes/29/21/66/HC20RL1qSyCTtcXM8UBB_buffalo-chicken-sandwich-5755.jpg',
        price: 5.99
      },
      {
        restaurant_id: 3,
        user_id: null,
        name: 'KC Half Rack of Ribs',
        details: 'St. Louis cut, Kansas City BBQ sauce. Fries on the side.',
        dietary: 'Dairy-free',
        pickup: 'After 7 pm',
        image: 'https://c1.staticflickr.com/7/6213/6332807985_1b05c82101_b.jpg',
        price: 8.99
      }]);
    });
};
