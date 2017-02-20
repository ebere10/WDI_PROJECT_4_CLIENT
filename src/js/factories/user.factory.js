angular
  .module('mindPops')
  .factory('User', userFactory);

userFactory.$inject = ['API', '$resource'];
function userFactory(API, $resource){
  return $resource(`${API}/users/:id`, { id: '@_id'}, {
    'register': { method: 'POST', url: `${API}/register` },
    'login': { method: 'POST', url: `${API}/login` }
  });
}

// angular
//   .module('mindPops')
//   .factory('User', userFactory);
//
// userFactory.$inject = ['API', '$resource'];
// function userFactory(API, $resource){
//   return $resource('$http://localhost:3000/users/:id', { id: '@_id'}, {
//     'register': { method: 'POST', url: '$http://localhost:3000/register' }
//   });
// }
