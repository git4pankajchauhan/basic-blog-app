import Axios from 'axios';
import ProtectedRoute from 'Services/Auth/ProtectedRoute';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Navbar, Login, Posts, Signup, Post } from './Pages';

const App = () => {
  Axios.defaults.withCredentials = true;
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState('');

  const userAuth = async () => {
    const response = await Axios.get('http://localhost:5000/user/login');
    if (response.data.loggedIn) {
      setIsAuth(true);
      setUser(response.data.user.name);
    }
  };
  useEffect(() => {
    userAuth();
  }, [isAuth, user]);
  return (
    <Router>
      <Navbar isAuth={isAuth} username={user} />
      <Switch>
        <ProtectedRoute exact path="/" component={Posts} isAuth={isAuth} />
        <ProtectedRoute exact path="/post/:id" component={Post} isAuth={isAuth} />
        <Route exact path="/signup">
          {isAuth ? <Redirect to="/" /> : <Signup />}
        </Route>
        <Route exact path="/login">
          {isAuth ? <Redirect to="/" /> : <Login />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
