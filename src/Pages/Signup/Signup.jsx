import { color } from 'Assets/Style/themes'
import CustomButton from 'Components/Button/CustomButton'
import { CustomInput } from 'Components/Input/CustomInput'
import Loader from 'Components/Loader/Loader'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signupAction } from 'Store/actions/auth.action'

const Signup = props => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  })
  const dispatch = useDispatch()
  const isSuccessMessage = useSelector(state => state.common.isSuccessMessage)
  const isErrorMessage = useSelector(state => state.common.isErrorMessage)

  const onInputChange = e => {
    const { name, value } = e.target
    setUser(preVal => ({
      ...preVal,
      [name]: value,
    }))
  }

  const onSignup = e => {
    e.preventDefault()
    dispatch(signupAction(user, props.history))
  }

  return (
    <>
      {/* <Loader /> */}
      <form className='user-form' onSubmit={onSignup} autoComplete='off'>
        <h2 className='form-title'>Sign Up</h2>
        {isErrorMessage && <div className='message error'>{isErrorMessage}</div>}
        {isSuccessMessage && <div className='message success'>{isSuccessMessage}</div>}
        <CustomInput type='text' name='name' onChange={onInputChange} value={user.name} placeholder='Enter Name' />
        <CustomInput type='text' name='email' onChange={onInputChange} value={user.email} placeholder='Enter Email' />
        <CustomInput type='password' name='password' onChange={onInputChange} value={user.password} placeholder='Enter Password' />
        <CustomButton color={color.success}>Submit</CustomButton>
      </form>
    </>
  )
}

export default Signup
