angular
.module('mindPops')
.factory('Comment', commentFactory);

commentFactory.$inject = ['API', '$resource'];
function commentFactory(API, $resource) {
  return $resource(`${API}/comments/:id`, {id: '@_id'},
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
