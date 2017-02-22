angular
  .module('mindPops')
  .controller('postsNewCtrl', postsNewCtrl);

postsNewCtrl.$inject = ['Post'];
function postsNewCtrl(Post){
  const vm = this;

  vm.create = () => {
    Post
      .save(vm.post);
      // .$promise;
  };
}
