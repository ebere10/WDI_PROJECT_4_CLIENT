angular
.module('mindPops')
.controller('PostsShowCtrl', PostsShowCtrl);

PostsShowCtrl.$inject = ['Post', '$stateParams', '$http', 'API', 'Comment'];

function PostsShowCtrl(Post, $stateParams, $http, API, Comment) {
  const vm = this;

  vm.post = Post.get($stateParams);
  vm.comment = {};
  vm.addComment    = addComment;


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
}

//   vm.submit = () => {
//     vm.comment.post_id = $stateParams.id;
//
//     $http
//       .post(`${API}/comments`, vm.comment)
//       .then(data => {
//         vm.post.comments.push(data.data);
//         vm.comment = '';
//       });
//   };
//
//   vm.commentDelete = (comment) => {
//
//     $http
//       .delete(`${API}/comments/${ comment.id }`)
//       .then(data => {
//         console.log(data);
//         let index = vm.post.comments.indexOf(data.data.id);
//         vm.post.comments.splice(index, 1);
//       });
//   };
// }
