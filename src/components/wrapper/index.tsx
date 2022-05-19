import { FC } from 'react';
import { Outlet, NavLink } from 'react-router-dom';

import './style.sass';

const nav = [
  {
    id: 1,
    to: '/',
    name: 'Home',
  },
  {
    id: 2,
    to: '/profile',
    name: 'Profile',
  },

  {
    id: 3,
    to: '/chats',
    name: 'Chats',
  },

  {
    id: 4,
    to: '/about',
    name: 'About',
  },
];

export const Wrapper: FC = () => (
  <div className="wrapper">
    <header className="header">
      <ul className="header__menu">
        {nav.map((el) => (
          <li className="header__menu-item" key={el.id}>
            <NavLink
              to={el.to}
              style={({ isActive }) => ({ color: isActive ? 'red' : 'orange' })}
            >
              {el.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </header>
    <main className="main">
      <div className="main__container">
        <Outlet />
      </div>
    </main>
  </div>
);
