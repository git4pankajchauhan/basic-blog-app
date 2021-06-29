import { Delete } from '@material-ui/icons'
import { color } from 'Assets/Style/themes'
import CustomButton from 'Components/Button/CustomButton'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Suspense } from 'react'
import { NavLink } from 'react-router-dom'
import { deletePostAction } from 'Store/actions/post.action'
import './Post.scss'

const Post = props => {
  const { _id: id, tags, title, subTitle, description } = props

  const dispatch = useDispatch()

  const onDeletePost = () => {
    dispatch(deletePostAction(props._id))
  }

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <div className='post-box'>
        <div className='post-info'>
          <span className='tags'>{tags}</span>
          <h2 className='title'>{title}</h2>
          <p className='sub-title'>{subTitle}</p>
          <p className='sub-title'>{description}</p>
        </div>
        <div className='btns-wrap'>
          <NavLink className='btn-link' to={{ pathname: `/post/${id}` }}>
            <CustomButton color={color.default}>View Post</CustomButton>
          </NavLink>
          <CustomButton color={color.success} onClick={() => props.onPostEditClick(id)}>
            Edit Post
          </CustomButton>
          <CustomButton color={color.danger} onClick={onDeletePost}>
            <Delete />
          </CustomButton>
        </div>
      </div>
    </Suspense>
  )
}

export default Post
