import { Person } from '@material-ui/icons'
import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './Header.scss'

const Header = () => {
  const auth = useSelector(state => state.auth.auth)

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
            <NavLink className='user' activeClassName='active' to='/logout'>
              Logout
            </NavLink>
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

export default Header
