angular
.module('mindPops')
.controller('PostsShowCtrl', PostsShowCtrl);

PostsShowCtrl.$inject = ['Post', '$stateParams', '$http', 'API', 'Comment'];
function PostsShowCtrl(Post, $stateParams, $http, API, Comment) {
  const vm = this;

  vm.post = Post.get($stateParams);
  vm.comment = {};
  vm.addComment    = addComment;
  vm.getPost = getPost;
  // vm.deleteComment = deleteComment;


  function getPost() {
    Post
      .get({ id: $stateParams.id })
      .$promise
      .then(data => {
        vm.post = data;
      });
  }

  getPost();

  function addComment() {
    if (vm.comment && vm.comment.body && vm.comment.body.length){
      vm.comment.post_id = vm.post.id;
      Comment
      .save({comment: vm.comment})
      .$promise
      .then(data => {
        vm.post.comments.push(data);
        vm.comment = {};
      });
    }
  }


  // function deleteComment(comment) {
  //   Comment
  //   .delete({ id: comment.id })
  //   .$promise
  //   .then(() => {
  //     getPost();
  //   });
  // }

}
