import { color } from 'Assets/Style/themes'
import CustomButton from 'Components/Button/CustomButton'
import { CustomInput } from 'Components/Input/CustomInput'
import Loader from 'Components/Loader/Loader'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginAction } from 'Store/actions/auth.action'
import { toggleLoader } from 'Store/actions/common.action'

const Login = props => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const dispatch = useDispatch()
  const isSuccessMessage = useSelector(state => state.common.isSuccessMessage)
  const isErrorMessage = useSelector(state => state.common.isErrorMessage)
  const isLoader = useSelector(state => state.common.isLoader)

  const onInputChange = e => {
    const { name, value } = e.target
    setUser(preVal => ({
      ...preVal,
      [name]: value,
    }))
  }

  const onLogin = e => {
    e.preventDefault()
    dispatch(loginAction(user, props.history))
    dispatch(toggleLoader(true))
  }

  return (
    <form className='user-form' onSubmit={onLogin} autoComplete='off'>
      {isLoader && <Loader />}
      <h2 className='form-title'>Log In</h2>
      {isErrorMessage && <div className='message error'>{isErrorMessage}</div>}
      {isSuccessMessage && <div className='message success'>{isSuccessMessage}</div>}
      <CustomInput type='text' name='email' onChange={onInputChange} value={user.email} placeholder='Enter Email' />
      <CustomInput type='password' name='password' onChange={onInputChange} value={user.password} placeholder='Enter Password' />
      <CustomButton color={color.success}>Submit</CustomButton>
    </form>
  )
}

export default Login
