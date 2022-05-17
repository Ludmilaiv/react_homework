export interface IButtonProps {
  className: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  content: JSX.Element | string;
  onClick?: () => void;
}