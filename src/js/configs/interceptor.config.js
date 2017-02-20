//use http provider and auth interceptor to affect way http works
angular
.module('angularAuthentication')
.config(Interceptor);

Interceptor.$inject = ['$httpProvider'];
function Interceptor($httpProvider){
  return $httpProvider.interceptors.push('AuthInterceptor');
}
