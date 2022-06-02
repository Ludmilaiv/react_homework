import { FC } from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { changeAuth } from '../../store/profile/slice';
import { selectAuth } from '../../store/profile/selectors';

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

  {
    id: 5,
    to: '/articles',
    name: 'Articles',
  },
];

export const Wrapper: FC = () => {
  const dispatch = useDispatch();
  const auth = useSelector(selectAuth);

  return (
    <div className="wrapper">
      <header className="header">
        <ul className="header__menu">
          {nav.map((el) => (
            <li className="header__menu-item" key={el.id}>
              <NavLink
                to={el.to}
                style={({ isActive }) => ({
                  color: isActive ? 'red' : 'orange',
                })}
              >
                {el.name}
              </NavLink>
            </li>
          ))}
        </ul>
        {auth ? (
          <button onClick={() => dispatch(changeAuth(false))}>logout</button>
        ) : (
          <Link to="/signin">SingIn</Link>
        )}
      </header>
      <main className="main">
        <div className="main__container">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
