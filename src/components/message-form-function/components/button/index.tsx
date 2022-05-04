import { FC } from 'react';
import { IButtonProps } from './interface';
import ButtonUI from '@mui/material/Button';

export const Button: FC<IButtonProps> = ({content, disabled, onClick}) => {
  return <ButtonUI type='submit' onClick={onClick} disabled={disabled} variant='contained'>{content}</ButtonUI>;
};