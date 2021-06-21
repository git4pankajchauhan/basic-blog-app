import { Person } from '@material-ui/icons';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <div className="head">
      <span className="head-title">Blog App </span>
      <div className="l-wrap">
        <NavLink className="user" activeClassName="active" to="/" exact>
          Home
        </NavLink>
        <NavLink className="user" activeClassName="active" to="/posts" exact>
          Posts
        </NavLink>
        <NavLink className="user" activeClassName="active" to="/signup" exact>
          Singup
        </NavLink>
        <NavLink className="user" activeClassName="active" to="/login" exact>
          Login
        </NavLink>
        <span className="user username">
          <Person /> Hi, Pankaj
        </span>
      </div>
    </div>
  );
};

export default Header;
