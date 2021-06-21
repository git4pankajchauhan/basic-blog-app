import axiosInstance from './AxiosInstance';

// get posts
export function getPosts() {
  return axiosInstance.get(`/posts`);
}
// get post by tag name
export function getPostByTag(postTag) {
  return axiosInstance.get(`/posts/${postTag}`);
}
// get single post by id
export function getSinglePost(postId) {
  return axiosInstance.get(`/posts/getsingle/${postId}`);
}
// create post
export function createPost(postData) {
  return axiosInstance.post(`posts`, postData);
}
// update post
export function updatePost(postId, post) {
  return axiosInstance.patch(`posts/${postId}`, post);
}
// delete post
export function deletePost(postId) {
  return axiosInstance.delete(`posts/${postId}`);
}
