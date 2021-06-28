import { Add } from '@material-ui/icons'
import CustomButton from 'Components/Button/CustomButton'
import React, { lazy, Suspense, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openDrawer } from 'Store/actions/common.action'
import { getPostActionByTag, getPostsAction } from 'Store/actions/post.action'
import './Post.style.scss'
const CreatePostForm = lazy(() => import('Components/Post/CreatePostForm'))
const Post = lazy(() => import('Components/Post/Post'))
const EditPostForm = lazy(() => import('Components/Post/EditPostForm'))

const Posts = props => {
  const [search, setSearch] = useState('')
  const [post, setPost] = useState(null)

  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts.posts)

  const onSearch = e => {
    setSearch(e.target.value)
  }

  const onOpenCreatePost = () => {
    dispatch(openDrawer('CREATE_POST'))
  }
  const onPostEditClick = id => {
    dispatch(openDrawer('EDIT_POST'))
    setPost(posts.find(post => post._id === id))
  }

  useEffect(() => {
    if (search) {
      dispatch(getPostActionByTag(search))
    } else {
      dispatch(getPostsAction())
    }
  }, [dispatch, search])

  return (
    <section className='post-section'>
      <div className='body'>
        <div className='filter-wrap'>
          <input type='text' className='filter-post' placeholder='Search by tags...' onChange={onSearch} value={search} />
          <CustomButton className='add-post-btn' onClick={onOpenCreatePost}>
            <Add /> Create New Post
          </CustomButton>
        </div>
        <div className='post-container'>
          {posts.map(post => (
            <Suspense fallback={<h1>Loading</h1>}>
              <Post key={post._id} {...post} history={props.history} onPostEditClick={onPostEditClick} />
            </Suspense>
          ))}
        </div>
      </div>
      <Suspense fallback={<h1>Loading</h1>}>
        <CreatePostForm id='CREATE_POST' />
      </Suspense>
      <Suspense fallback={<h1>Loading</h1>}>{post && <EditPostForm id='EDIT_POST' post={{ ...post }} />}</Suspense>
    </section>
  )
}

export default Posts
