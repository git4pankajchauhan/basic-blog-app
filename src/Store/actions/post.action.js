import { getPosts, getPostByTag, getSinglePost, createPost, updatePost, deletePost } from 'Services/Posts.service';
import { GET_POSTS, CREATE_POST_ACTION, EDIT_POST_ACTION, CONFIRMED_GET_POSTS, CONFIRMED_CREATE_POST_ACTION, CONFIRMED_EDIT_POST_ACTION, CONFIRMED_DELETE_POST_ACTION } from 'Store/constants/post.constant';

export function getPostsAction() {
  return async (dispatch, getState) => {
    try {
      const posts = await getPosts();
      dispatch(confirmedGetPostsAction(posts.data));
    } catch (error) {
      console.log('get post action error', error);
    }
  };
}

export function confirmedGetPostsAction(posts) {
  return {
    type: CONFIRMED_GET_POSTS,
    payload: posts,
  };
}

export const createPostAction = (postData, history) => async (dispatch, getState) => {
  try {
    await createPost(postData);
    const singlePost = {
      _id: Math.random(),
      ...postData,
    };
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

// export function deletePostAction(postId) {
//   return (dispatch, getState) => {
//     try {
//       await deletePost(postId);
//       dispatch(confirmedDeletePostAction(postId));
//     } catch (error) {
//       console.log(error);
//     }
//   };
// }

// export function confirmedDeletePostAction(postId) {
//   return {
//     type: CONFIRMED_DELETE_POST_ACTION,
//     payload: postId,
//   };
// }

// export function createPostAction(postData, history) {
//   return (dispatch, getState) => {
//     createPost(postData).then(response => {
//       const singlePost = {
//         ...postData,
//         id: response.data.name,
//       };
//       dispatch(confirmedCreatePostAction(singlePost));
//       history.push('/posts');
//     });
//   };
// }

// export function confirmedCreatePostAction(singlePost) {
//   return {
//     type: CONFIRMED_CREATE_POST_ACTION,
//     payload: singlePost,
//   };
// }

// export function confirmedUpdatePostAction(post) {
//   return {
//     type: CONFIRMED_EDIT_POST_ACTION,
//     payload: post,
//   };
// }

// export function updatePostAction(post, history) {
//   return (dispatch, getState) => {
//     updatePost(post, post.id).then(reponse => {
//       dispatch(confirmedUpdatePostAction(post));
//       history.push('/posts');
//     });
//   };
// }
