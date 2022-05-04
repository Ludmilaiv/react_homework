import { ChangeEvent } from 'react';

export interface IInputProps {
  autofocus: boolean;
  value: string;
  placeholder: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}