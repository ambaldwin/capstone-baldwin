app.service('mainService', function ($resource) {
  return {
    getAll: $resource('index/:id', {id: '@id'}, {
      'get': {
        method: 'GET',
        isArray: true
      }
    })
  }
})
