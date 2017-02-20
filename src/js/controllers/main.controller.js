angular
  .module('mindPops')
  .controller('MainCtrl', MainCtrl);


MainCtrl.$inject = ['$rootScope', 'CurrentUserService', '$state'];
function MainCtrl($rootScope, CurrentUserService, $state) {
  const vm = this;

  vm.user = CurrentUserService.getUser();

  vm.logout = () => {
    CurrentUserService.clearUser();
    $state.go('home');
  };

  $rootScope.$on('loggedIn', () => {
    vm.user = CurrentUserService.getUser();
  });

  $rootScope.$on('loggedOut', () => {
    vm.user = null;
  });
}
