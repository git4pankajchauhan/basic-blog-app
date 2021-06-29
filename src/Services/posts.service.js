import axiosInstance from './axiosInstance'

// get posts
export const getPosts = () => axiosInstance.get(`/post`)

// get single post by id
export const getSinglePost = id => axiosInstance.get(`/post/single/${id}`)

// get post by tag name
export const getPostByTag = postTag => axiosInstance.get(`/post/${postTag}`)

// create post
export const createPost = postData => axiosInstance.post(`/post`, postData)

// update post
export const updatePost = (postId, post) => axiosInstance.patch(`/post/${postId}`, post)

// delete post
export const deletePost = postId => axiosInstance.delete(`/post/${postId}`)
