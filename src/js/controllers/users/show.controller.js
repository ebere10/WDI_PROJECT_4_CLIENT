angular
  .module('mindPops')
  .controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['User', 'Post', 'CurrentUserService', '$stateParams'];
function UsersShowCtrl(User, Post, CurrentUserService, $stateParams){
  const vm = this;

  vm.createPost  = createPost;
  vm.checkUser   = checkUser;
  vm.deletePost  = deletePost;

  User
    .get({ id: $stateParams.id })
    .$promise
    .then(data => {
      vm.user = data;
    });

  function createPost() {
    vm.post.user_id = CurrentUserService.user.id;

    Post
      .save(vm.post)
      .$promise
      .then(data => {
        vm.user.posts.push(data);
      });
  }

  function deletePost() {
  }

  function checkUser() {
    if (CurrentUserService.user.id === parseInt($stateParams.id)) {
      return true;
    } else {
      return false;
    }
  }
}
