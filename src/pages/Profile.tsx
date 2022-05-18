import { ThemeContext } from '../utils/ThemeContext';
import { FC, useContext } from 'react';

export const Profile: FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <h2>Profile</h2>
      <div>
        <p>{theme === 'light' ? '🌞' : '🌙'}</p>
        <button onClick={toggleTheme}>Change theme</button>
      </div>
    </>
  );
};
