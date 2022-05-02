import { FC } from 'react';
import { IInputProps } from './interface';

export const Input: FC<IInputProps> = ({className, disabled, placeholder, value, onChange}) => {
  return <input disabled={disabled} placeholder={placeholder} className={className} type='text' value={value} onChange={onChange}/>;
};