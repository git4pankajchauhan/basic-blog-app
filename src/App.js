import Loader from 'Components/Loader/Loader'
import React, { Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Switch, withRouter } from 'react-router-dom'
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
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path='/' component={Home} exact />
          {!isAuth && (
            <>
              <Route path='/signup' component={Signup} />
              <Route path='/login' component={Login} />
            </>
          )}
          {isAuth && (
            <>
              <Route path='/posts' component={Posts} />
              <Route path='/post/:id' component={Post} />
            </>
          )}
        </Switch>
      </Suspense>
    </>
  )
}

export default withRouter(App)
