angular
.module('mindPops')
.controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['User', 'Post', 'CurrentUserService', '$stateParams'];
function UsersShowCtrl(User, Post, CurrentUserService, $stateParams){
  const vm = this;
  vm.createPost = createPost;
  vm.checkUser = checkUser;
  //delete
  vm.post = {};

  User
  .get({id: $stateParams.id})
  .$promise
  .then((data) => {
    vm.user = data;
  });

  // function createPost() {
  //   vm.post.user_id = CurrentUserService.user.id;
  //   Post
  //   .save(vm.post)
  //   .$promise
  //   .then((data) => {
  //     console.log(data);
  //   });
  // }

  function createPost() {
    vm.post.user_id = CurrentUserService.user.id;
    Post
    .save(vm.post)
    .$promise
    .then((data) => {
      vm.posts.push(data);
      vm.post = {};
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
