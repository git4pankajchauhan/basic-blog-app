import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, Route, Switch, withRouter } from 'react-router-dom'
import { loadUserAction } from 'Store/actions/auth.action'
import { Header, Home, Login, Post, Posts, Signup } from './Pages'

const App = props => {
  const isAuth = useSelector(state => state.auth.isAuth)

  const dispatch = useDispatch()

  useEffect(() => {
    if (localStorage.getItem('jwtoken')) {
      dispatch(loadUserAction())
    }
  }, [dispatch])

  return (
    <>
      <Header />
      {!isAuth && (
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />
          <Redirect to='/login' />
        </Switch>
      )}
      {isAuth && (
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/posts' component={Posts} />
          <Route path='/post/:id' component={Post} />
          <Redirect to='/' />
        </Switch>
      )}
    </>
  )
}

export default withRouter(App)
