import { ThemeContext } from '../utils/ThemeContext';
import { FC, useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleProfile, changeName } from '../store/profile/actions';
import { ProfileState } from '../store/profile/reducer';

export const Profile: FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const visible = useSelector((state: ProfileState) => state.visible);
  const name = useSelector((state: ProfileState) => state.name);

  return (
    <>
      <h2>Profile</h2>
      <div>
        <p>{theme === 'light' ? '🌞' : '🌙'}</p>
        <button onClick={toggleTheme}>Change theme</button>
      </div>
      <div>
        <p>{name}</p>
        <input type="checkbox" disabled checked={visible} />
        <button onClick={() => dispatch(toggleProfile())}>
          change visible
        </button>
        <br />
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button onClick={() => dispatch(changeName(value))}>change name</button>
      </div>
    </>
  );
};
