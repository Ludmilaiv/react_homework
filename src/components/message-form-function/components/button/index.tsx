import { FC } from 'react';
import { IButtonProps } from './interface';

export const Button: FC<IButtonProps> = ({className, content, type, disabled, onClick}) => {
  return <button className={className} disabled={disabled} onClick={onClick} type={type}>
    {content}
  </button>;
};