import { CONFIRMED_CREATE_POST_ACTION, CONFIRMED_DELETE_POST_ACTION, CONFIRMED_EDIT_POST_ACTION, CONFIRMED_GET_POSTS, CREATE_POST_ACTION, GET_POSTS_BY_TAG } from '../constants/post.constant';

const initialState = {
  posts: [],
};

export default function PostsReducer(state = initialState, actions) {
  if (actions.type === CONFIRMED_GET_POSTS) {
    return {
      ...state,
      posts: actions.payload,
    };
  }

  if (actions.type === CONFIRMED_CREATE_POST_ACTION) {
    const posts = [...state.posts, actions.payload];
    return {
      ...state,
      posts,
    };
  }

  if (actions.type === CONFIRMED_DELETE_POST_ACTION) {
    const posts = [...state.posts];
    const postIndex = posts.findIndex(post => post._id === actions.payload);
    posts.splice(postIndex, 1);
    return {
      ...state,
      posts,
    };
  }

  if (actions.type === CONFIRMED_EDIT_POST_ACTION) {
    const posts = [...state.posts];
    const postIndex = posts.findIndex(post => post._id === actions.payload._id);

    posts[postIndex] = actions.payload;
    return {
      ...state,
      posts,
    };
  }

  if (actions.type === GET_POSTS_BY_TAG) {
    const posts = [...state.posts];
    const filtered_posts = posts.filter(post => post.tags.includes(actions.payload));
    return {
      ...state,
      posts: filtered_posts,
    };
  }

  return state;
}
