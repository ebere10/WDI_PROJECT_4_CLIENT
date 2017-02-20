// angular
//   .module('mindPops')
//   .controller('RegisterCtrl', RegisterCtrl);
//
// RegisterCtrl.$inject = ['User'];
// function RegisterCtrl(User) {
//   const vm    = this;
//
//   vm.register =  () => {
//     User.register();
//   };
// }

angular
  .module('mindPops')
  .controller('UserRegisterCtrl', UserRegisterCtrl);

UserRegisterCtrl.$inject = ['User', 'CurrentUserService', '$state'];
function UserRegisterCtrl(User, CurrentUserService, $state) {
  const vm = this;

  vm.register = () => {
    User
    .register(vm.user)
    .$promise
    .then(user => {
      CurrentUserService.getUser();
      $state.go('usersShow', { id: user.user._id });
    }, err => {
      console.log(err);
    });
  };
}
