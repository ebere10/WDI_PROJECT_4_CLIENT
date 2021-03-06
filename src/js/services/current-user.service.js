angular
  .module('mindPops')
  .service('CurrentUserService', CurrentUserService);

CurrentUserService.$inject = ['TokenService', '$rootScope'];
function CurrentUserService(TokenService, $rootScope){
  let currentUser = TokenService.decodeToken();

  return {
    user: currentUser,
    saveUser(user, token){
      user.id = user.id ? user.id : user._id;
      currentUser = user;
      TokenService.setToken(token);
      $rootScope.$broadcast('loggedIn');
    },
    getUser(){
      return currentUser;
    },
    clearUser(){
      currentUser = null;
      TokenService.clearToken();
      $rootScope.$broadcast('loggedOut');
    }
  };
}
