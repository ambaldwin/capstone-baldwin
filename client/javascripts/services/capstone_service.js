app.service('capstoneService', function ($resource) {
  return {
    loginRestaurant: $resource('register/:id', {id: '@id'}, {
      'save': {
        method: 'POST',
        isArray: false
      }
    }),
    signupRestaurant: $resource('signup/:id', {id: '@id'}, {
        'save':  {
          method:'POST',
          isArray: true
        }
      }),
    loginUser: $resource('registeruser/:id', {id: '@id'}, {
        'save':  {
          method:'POST',
          isArray: false
        }
      }),
    signupUser: $resource('signupuser/:id', {id: '@id'}, {
        'save':  {
          method:'POST',
          isArray: true
        }
      })
    // questions: $resource('questions/:id', {id: '@id'}, {
    //   'save': {
    //     method: 'POST',
    //     isArray: false
    //   },
    //   'get': {
    //     methid: 'GET',
    //     isArray: true
    //   }
    // })
    }
})
