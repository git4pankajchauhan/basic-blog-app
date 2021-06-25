import { color } from 'Assets/Style/themes'
import CustomButton from 'Components/Button/CustomButton'
import CustomDrawer from 'Components/Drawer/CustomDrawer'
import { CustomInput, CustomTextArea } from 'Components/Input/CustomInput'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { updatePostAction } from 'Store/actions/post.action'

const EditPostForm = ({ id, post }) => {
  const [spost, setSpost] = useState({ ...post })
  const dispatch = useDispatch()

  const onAddPostChange = e => {
    const { name, value } = e.target
    setSpost(lastInput => ({
      ...lastInput,
      [name]: value,
    }))
  }

  const onCreatePost = e => {
    e.preventDefault()
    dispatch(updatePostAction(spost))
  }

  useEffect(() => {
    setSpost({ ...post })
  }, [post])

  return (
    <CustomDrawer headTitle='Edit Post' id={id}>
      <form onSubmit={onCreatePost}>
        <CustomInput type='text' name='title' value={spost.title} onChange={onAddPostChange} placeholder='Enter Title' />
        <CustomInput type='text' name='subTitle' value={spost.subTitle} onChange={onAddPostChange} placeholder='Enter Sub Title' />
        <CustomInput type='text' name='tags' value={spost.tags} onChange={onAddPostChange} placeholder='Enter Tags' />
        <CustomTextArea type='text' name='description' value={spost.description} onChange={onAddPostChange} placeholder='Enter Description' />
        <CustomButton color={color.success}>Submit</CustomButton>
      </form>
    </CustomDrawer>
  )
}

export default EditPostForm
