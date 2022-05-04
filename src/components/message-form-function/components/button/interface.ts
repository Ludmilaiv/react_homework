export interface IButtonProps {
  disabled?: boolean;
  content: JSX.Element | string;
  onClick?: () => void;
}