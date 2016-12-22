app.service('registerService', function ($resource) {
  return {
    loginRestaurant: $resource('register', {id: '@id'}, {
      'save': {
        method: 'POST',
        isArray: false
      }
    }),
    signupRestaurant: $resource('signup', {id: '@id'}, {
        'save':  {
          method:'POST',
          isArray: true
        }
      }),
    loginUser: $resource('registeruser', {id: '@id'}, {
        'save':  {
          method:'POST',
          isArray: false
        }
      }),
    signupUser: $resource('signupuser', {id: '@id'}, {
        'save':  {
          method:'POST',
          isArray: true
        }
      })
    }
})
