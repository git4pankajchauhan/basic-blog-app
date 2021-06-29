import { createPost, deletePost, getPosts, getSinglePost, updatePost } from 'Services/posts.service'
import { post_type } from 'Store/constants'
import { closeDrawer } from './common.action'

// get all posts from api and store
export const getAllPostsAction = () => async (dispatch, getState) => {
  try {
    const posts = await getPosts()
    const postsdata = posts.data
    dispatch({
      type: post_type.GET_POSTS,
      payload: postsdata,
    })
  } catch (error) {
    console.log('get post action error', error)
  }
}

// get single post from api and store
export const getSeletedPostAction = id => async dispatch => {
  try {
    const post = await getSinglePost(id)
    const postdata = post.data
    dispatch({
      type: post_type.GET_SINGLE_POST,
      payload: postdata,
    })
  } catch (error) {
    console.log('get post action error', error)
  }
}

// create new post api and store
export const createPostAction = postData => async (dispatch, getState) => {
  try {
    const result = await createPost(postData)
    const post = result.data.lastpost
    dispatch({
      type: post_type.CREATE_POST,
      payload: post,
    })
    dispatch(closeDrawer())
  } catch (error) {
    console.log('create post action error', error)
  }
}

// delete post from api and store
export const deletePostAction = postId => async (dispatch, getState) => {
  try {
    await deletePost(postId)
    dispatch({
      type: post_type.DELETE_POST,
      payload: postId,
    })
  } catch (error) {
    console.log('delete post action error', error)
  }
}

// update post from api and store
export const updatePostAction = post => async (dispatch, getState) => {
  try {
    await updatePost(post._id, post)
    dispatch({
      type: post_type.UPDATE_POST,
      payload: post,
    })
    dispatch(closeDrawer())
  } catch (error) {
    console.log('update post action error', error)
  }
}

// filter posts store
export const getFilteredPostsAction = tag => ({
  type: post_type.GET_FILTERED_POSTS,
  payload: tag,
})

export const removeSeletedPostAction = () => ({
  type: post_type.REMOVE_SINGLE_POST,
})
