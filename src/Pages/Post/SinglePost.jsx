import { color } from 'Assets/Style/themes'
import CustomButton from 'Components/Button/CustomButton'
import Loader from 'Components/Loader/Loader'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getSeletedPostAction, removeSeletedPostAction } from 'Store/actions/post.action'
import '../../Components/Post/Post.scss'

const SinglePost = props => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const post = useSelector(state => state.posts.post)

  useEffect(() => {
    if (post._id !== id) {
      dispatch(getSeletedPostAction(id))
    }
  }, [post])

  useEffect(() => {
    return () => {
      dispatch(removeSeletedPostAction())
    }
  }, [])

  return (
    <>
      {Object.keys(post).length === 0 ? (
        <Loader />
      ) : (
        <section className='spost-section'>
          <div className='post-box'>
            <div className='post-info'>
              <span className='tags'>{post.tags}</span>
              <h2 className='title'>{post.title}</h2>
              <p className='sub-title'>{post.subTitle}</p>
              <p className='description'>{post.description}</p>
              <CustomButton
                color={color.primary}
                onClick={() => {
                  props.history.push('/posts')
                }}>
                Go Back To Post
              </CustomButton>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default SinglePost
