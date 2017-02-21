angular
  .module('mindPops')
  .controller('postsIndexCtrl', postsIndexCtrl);

postsIndexCtrl.$inject = ['Post', 'TokenService', '$state'];

function postsIndexCtrl(Post, TokenService, $state){
  const vm = this;
  // vm.hiya = 'yh mate';
  vm.posts = Post.query();
  if (!TokenService.getToken()){
    $state.go('login');
  }

}
