import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, Login, Header, Post, Posts, Signup } from './Pages';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/posts" component={Posts} exact />
        <Route path="/post/:id" component={Post} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
