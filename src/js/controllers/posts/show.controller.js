angular
.module('mindPops')
.controller('postsShowCtrl', postsShowCtrl);

postsShowCtrl.$inject = ['Post', '$stateParams', '$http', 'API'];

function postsShowCtrl(Post, $stateParams, $http, API) {
  const vm = this;
  //
  vm.post = Post.get($stateParams);
  vm.comment = {};
  vm.addComment    = addComment;
  

  function addComment() {
    $http
    .post(`${API}/posts/${$stateParams.id}/comments`, {comment: vm.comment})
    .then((response) => {
      console.log(response.data);
      vm.post.comments.push(response.data);
    });
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
