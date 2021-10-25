import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <header>
      <h2>wally-wally's Todo List</h2>
      <div className="tabs">
        <NavLink activeClassName="active-tab" to="/list">
          <span className="emoji">📃</span> 할 일 목록
        </NavLink>
        <NavLink activeClassName="active-tab" to="/form">
          <span className="emoji">➕</span> 할 일 추가
        </NavLink>
      </div>
    </header>
  );
};

export default Header;