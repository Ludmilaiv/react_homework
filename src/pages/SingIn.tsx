import { useDispatch } from 'react-redux';
import React, { FC, useState } from 'react';

import { changeAuth } from '../store/profile/slice';

export const SignIn: FC = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError(false);
    if (login === 'admin' && password === 'admin') {
      dispatch(changeAuth(true));
    } else {
      setError(true);
    }
  };

  return (
    <>
      <h2>Sign In</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <label>
          Логин: <br />
          <input
            type="text"
            onChange={(e) => setLogin(e.target.value)}
            value={login}
          />
        </label>
        <br />
        <label>
          Пароль: <br />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <br />
        <button>Sign in</button>
        {error && <p style={{ color: 'red' }}>Не верный логин или пароль</p>}
      </form>
    </>
  );
};
