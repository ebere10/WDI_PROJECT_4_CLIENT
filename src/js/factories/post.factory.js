angular
.module('mindPops')
.factory('Post', postFactory);

postFactory.$inject = ['API', '$resource'];
function postFactory(API, $resource) {
  return $resource(`${API}/posts/:id`, {id: '@_id'},
    {
      // 'get': { method: 'GET', isArray: false },
      // 'save': { method: 'POST' },
      'query': { method: 'GET', isArray: true },
      // 'remove': { method: 'DELETE' },
      // 'delete': { method: 'DELETE' }
      'update': { method: 'PUT' }
    }
  );
}
