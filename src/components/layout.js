import React from 'react';

import Menu from './menu';
import "./app.css";

export default ({ children }) => (
  <div className="app">
    <div className="header">
      <h2>Welcome Reaction with Apollo!</h2>
    </div>
    <Menu />

    { children}

  </div>
);