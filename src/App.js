import React from 'react';
import Navbar from 'Components/Navbar';
import { Route } from 'react-router';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home, Login, Profile, Signup } from 'Pages';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
