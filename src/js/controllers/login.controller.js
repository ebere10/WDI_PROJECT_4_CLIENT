angular
.module('mindPops')
.controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['User', 'CurrentUserService', '$state'];
function LoginCtrl(User, CurrentUserService, $state) {
  const vm = this;

  vm.login = () => {
    User
      .login(vm.user)
      .$promise
      .then(data => {
        const user = data.user || null;
        CurrentUserService.saveUser(user, data.token);
        $state.go('home');
      }, err => {
        console.log(err);
      });
  };
}
