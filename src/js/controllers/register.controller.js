angular
.module('mindPops')
.controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['User', 'CurrentUserService', '$state'];
function RegisterCtrl(User, CurrentUserService, $state){
  const vm = this;

  vm.register = () => {
    User
      .register(vm.user).$promise
      .then((data) => {
        const user = data.user || null;
        CurrentUserService.saveUser(user, data.token);
        $state.go('home');
      }, err => {
        console.log(err);
      });
  };
}
