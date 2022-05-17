import { ChangeEvent } from 'react';

export interface IInputProps {
  className: string;
  disabled?: boolean;
  value: string;
  placeholder: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}