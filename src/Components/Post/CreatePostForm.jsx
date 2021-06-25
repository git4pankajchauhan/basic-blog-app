import { color } from 'Assets/Style/themes'
import CustomButton from 'Components/Button/CustomButton'
import CustomDrawer from 'Components/Drawer/CustomDrawer'
import { CustomInput, CustomTextArea } from 'Components/Input/CustomInput'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleDrawer } from 'Store/actions/common.action'
import { createPostAction } from 'Store/actions/post.action'

const CreatePostForm = props => {
  const [post, setPost] = useState({ title: '', subTitle: '', tags: '', description: '' })
  const dispatch = useDispatch()

  const onCreatePost = e => {
    e.preventDefault()
    dispatch(createPostAction(post, props.history))
  }

  const onAddPostChange = e => {
    const { name, value } = e.target
    setPost(lastInput => ({
      ...lastInput,
      [name]: value,
    }))
  }

  useEffect(() => {
    dispatch(toggleDrawer(true))
  }, [props])

  return (
    <CustomDrawer headTitle='Add New Post'>
      <form onSubmit={onCreatePost}>
        <CustomInput type='text' name='title' onChange={onAddPostChange} placeholder='Enter Title' />
        <CustomInput type='text' name='subTitle' onChange={onAddPostChange} placeholder='Enter Sub Title' />
        <CustomInput type='text' name='tags' onChange={onAddPostChange} placeholder='Enter Tags' />
        <CustomTextArea type='text' name='description' onChange={onAddPostChange} placeholder='Enter Description' />
        <CustomButton color={color.success}>Submit</CustomButton>
      </form>
    </CustomDrawer>
  )
}

export default CreatePostForm
