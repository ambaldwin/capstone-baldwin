app.service('mainService', function ($resource) {
  return {
    meals: $resource('index', {id: '@id'}, {
      'get': {
        method: 'GET',
        isArray: true
      }
      // 'update': {
      //   method: 'PUT'
      // }
    }),
    getId: $resource('index/:id', {id: '@id'}, {
        'get':  {
          method:'GET',
          isArray: true
        }
      })
  }
})
