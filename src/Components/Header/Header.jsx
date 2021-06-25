import { Person } from '@material-ui/icons'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import { logoutAction } from 'Store/actions/auth.action'
import './Header.scss'

const Header = props => {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)

  const onLogout = () => {
    dispatch(logoutAction(props.history))
  }
  return (
    <div className='head'>
      <span className='head-title'>Blog App </span>
      <div className='l-wrap'>
        <NavLink className='user' activeClassName='active' to='/' exact>
          Home
        </NavLink>
        {auth.isAuth && (
          <>
            <NavLink className='user' activeClassName='active' to='/posts'>
              Posts
            </NavLink>
            <span className='user username'>
              <Person /> Hi, {auth.user.name}
            </span>

            <span className='user logout' onClick={onLogout}>
              Logout
            </span>
          </>
        )}
        {!auth.isAuth && (
          <>
            <NavLink className='user' activeClassName='active' to='/signup'>
              Singup
            </NavLink>
            <NavLink className='user' activeClassName='active' to='/login'>
              Login
            </NavLink>
          </>
        )}
      </div>
    </div>
  )
}

export default withRouter(Header)
