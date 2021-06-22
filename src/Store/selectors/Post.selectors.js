import { createSelector } from 'reselect';

export const getPostById = (state, postId) => state.PostsReducer.posts.find(post => post._id === postId);

export const getPost = () => createSelector([getPostById], post => post);
