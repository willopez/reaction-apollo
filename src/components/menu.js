import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
  <menu>
    <NavLink
      to="/"
      exact
      activeClassName="selected"
    >Home</NavLink>
    <NavLink
      to="/groups"
      exact
      activeClassName="selected"
    >Groups</NavLink>
  </menu>
);