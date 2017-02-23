angular
  .module('mindPops')
  .controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['User', 'Post', 'CurrentUserService', '$stateParams'];
function UsersShowCtrl(User, Post, CurrentUserService, $stateParams){
  const vm = this;

  vm.createPost  = createPost;
  vm.checkUser   = checkUser;
  vm.getUser     = getUser;
  vm.deletePost  = deletePost;

  function getUser() {
    User
      .get({ id: $stateParams.id })
      .$promise
      .then(data => {
        vm.user = data;
      });
  }

  getUser();

  function createPost() {
    vm.post.user_id = CurrentUserService.user.id;

    Post
      .save(vm.post)
      .$promise
      .then(data => {
        vm.user.posts.push(data);
      });
  }

  function deletePost(post) {
    Post
      .delete({ id: post.id })
      .$promise
      .then(() => {
        getUser();
      });
  }

  function checkUser() {
    if (CurrentUserService.user.id === parseInt($stateParams.id)) {
      return true;
    } else {
      return false;
    }
  }
}
