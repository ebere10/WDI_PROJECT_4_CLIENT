angular
  .module('mindPops')
  .controller('PostsIndexCtrl', PostsIndexCtrl);

PostsIndexCtrl.$inject = ['Post', 'TokenService', '$state'];
function PostsIndexCtrl(Post, TokenService, $state){
  const vm = this;
  vm.posts = Post.query();

  Post
  .query()
  .$promise
  .then((data) => {
    vm.post = data;
  });

  if (!TokenService.getToken()){
    $state.go('login');
  }

}
