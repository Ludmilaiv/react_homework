import { FC } from 'react';
import { IInputProps } from './interface';
import TextFieldUI from '@mui/material/TextField';

export const Input: FC<IInputProps> = ({
  autofocus,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <TextFieldUI
      autoFocus={autofocus}
      id="outlined-basic"
      onChange={onChange}
      value={value}
      label={placeholder}
      variant="outlined"
    />
  );
};
