import { color } from 'Assets/Style/themes'
import CustomButton from 'Components/Button/CustomButton'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getPost } from 'Store/selectors/Post.selectors'
import './Post.style.scss'

const SinglePost = props => {
  const [post, setPost] = useState({ ...props.post })

  useEffect(() => {
    if (props.post) {
      setPost(props.post)
    } else {
      props.history.push('/posts')
    }
  }, [props.history, props.match.params, props.post])

  return (
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
  )
}

const mapStateToProps = state => {
  const post = getPost()
  return (state, props) => {
    return {
      post: post(state, props.match.params.id),
    }
  }
}

export default connect(mapStateToProps)(SinglePost)
