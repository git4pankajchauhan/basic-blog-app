import { createPost, deletePost, getPosts, updatePost } from 'Services/Posts.service';
import { CONFIRMED_CREATE_POST_ACTION, CONFIRMED_DELETE_POST_ACTION, CONFIRMED_EDIT_POST_ACTION, CONFIRMED_GET_POSTS, GET_POSTS_BY_TAG } from 'Store/constants/post.constant';

export const getPostsAction = () => async (dispatch, getState) => {
  try {
    const posts = await getPosts();
    dispatch(confirmedGetPostsAction(posts.data));
  } catch (error) {
    console.log('get post action error', error);
  }
};

export const confirmedGetPostsAction = posts => ({
  type: CONFIRMED_GET_POSTS,
  payload: posts,
});

export const getPostActionByTag = tags => ({
  type: GET_POSTS_BY_TAG,
  payload: tags,
});

export const createPostAction = (postData, history) => async (dispatch, getState) => {
  try {
    const result = await createPost(postData);
    const singlePost = result.data.lastpost;
    dispatch(confirmedCreatePostAction(singlePost));
    history.push('/posts');
  } catch (error) {
    console.log('create post action error', error);
  }
};

export const confirmedCreatePostAction = post => ({
  type: CONFIRMED_CREATE_POST_ACTION,
  payload: post,
});

export const deletePostAction = (postId, history) => async (dispatch, getState) => {
  try {
    await deletePost(postId);
    dispatch(confirmedDeletePostAction(postId));
    history.push('/posts');
  } catch (error) {
    console.log('delete post action error', error);
  }
};

export const confirmedDeletePostAction = postId => ({
  type: CONFIRMED_DELETE_POST_ACTION,
  payload: postId,
});

export const updatePostAction = (post, history) => async (dispatch, getState) => {
  try {
    await updatePost(post._id, post);
    dispatch(confirmedUpdatePostAction(post));
    history.push('/posts');
  } catch (error) {
    console.log('update post action error', error);
  }
};

export const confirmedUpdatePostAction = post => ({
  type: CONFIRMED_EDIT_POST_ACTION,
  payload: post,
});
