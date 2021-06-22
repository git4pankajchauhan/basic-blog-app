import axiosInstance from './AxiosInstance';

// get posts
export function getPosts() {
  return axiosInstance.get(`/post`);
}
// get post by tag name
// export function getPostByTag(postTag) {
//   return axiosInstance.get(`/post/${postTag}`);
// }
// get single post by id
// export function getSinglePost(postId) {
//   return axiosInstance.get(`/post/getsingle/${postId}`);
// }
// create post
export function createPost(postData) {
  return axiosInstance.post(`/post`, postData);
}
// update post
// export function updatePost(postId, post) {
//   return axiosInstance.patch(`/post/${postId}`, post);
// }
// delete post
// export function deletePost(postId) {
//   return axiosInstance.delete(`/post/${postId}`);
// }
