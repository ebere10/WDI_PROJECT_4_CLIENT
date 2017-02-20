angular //http interceptor takes an object of certain shape which is why it's put in a factory
  .module('mindPops')
  .factory('AuthInterceptor', AuthInterceptor);

AuthInterceptor.$inject = ['API', 'TokenService'];
function AuthInterceptor(API, TokenService) {
  return {
    request(config){
    //modification
      const token = TokenService.getToken(); //do we have a token
      if (config.url.indexOf(API) === 0 && token) { //are we sending it to our api
        config.headers.Authorization = `Bearer ${token}`;//if we do grab and add it to headers and send it
      }
      return config;//then sent with amended config
    },
    response(res){//http request being received (header will be added)
    //modification
      if(res.config.url.indexOf(API) === 0 && res.data.token){
        console.log('setting token from interceptor', res.data.token);
        TokenService.setToken(res.data.token);//pass a token to the function setToken
      }
      return res;
    }
  };
}
