import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = ({ isAuth, component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={props => {
        if (isAuth) return <Component />

        // return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        return <Redirect to='/' />
      }}
    />
  )
}

export default ProtectedRoute
