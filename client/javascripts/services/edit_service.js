app.service('editService', function ($http) {
  return {
    edit: function(editedMeal) {
      const id = editedMeal.id
      return $http.put(`./edit/{id}`, editedMeal);
    },
    delete: function(meal) {
      const id = meal.id
      return $http.delete(`/edit/${id}`)
    }
  }
})
