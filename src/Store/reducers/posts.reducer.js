import { post_type } from 'Store/constants'

const initialState = {
  posts: [],
  post: {},
  allPost: [],
}

export default function PostsReducer(state = initialState, { type, payload }) {
  if (type === post_type.GET_POSTS) {
    return {
      ...state,
      posts: payload,
      allPost: payload,
    }
  }

  if (type === post_type.CREATE_POST) {
    const posts = [...state.posts, payload]
    return {
      ...state,
      posts,
      allPost: posts,
    }
  }

  if (type === post_type.DELETE_POST) {
    const posts = [...state.posts]
    const postIndex = posts.findIndex(post => post._id === payload)
    posts.splice(postIndex, 1)
    return {
      ...state,
      posts,
      allPost: posts,
    }
  }

  if (type === post_type.UPDATE_POST) {
    const posts = [...state.posts]
    const postIndex = posts.findIndex(post => post._id === payload._id)

    posts[postIndex] = payload
    return {
      ...state,
      posts,
      allPost: posts,
    }
  }

  if (type === post_type.GET_SINGLE_POST) {
    return {
      ...state,
      post: payload,
    }
  }

  if (type === post_type.REMOVE_SINGLE_POST) {
    return {
      ...state,
      post: initialState.post,
    }
  }

  if (type === post_type.GET_FILTERED_POSTS) {
    const posts = [...state.allPost]
    const filtered_posts = posts.filter(post => post.tags.includes(payload))
    console.log(filtered_posts)
    return {
      ...state,
      posts: filtered_posts,
    }
  }
  return state
}
