import MuiButton from '@mui/material/Button';
import { MouseEventHandler } from 'react';

type ButtonProps = {
  disabled: boolean;
  type: 'button' | 'submit';
  variant: 'contained' | 'outlined' | 'text';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
};

const Button = ({ disabled, variant, type = 'button', children, onClick }: ButtonProps) => {
  return (
    <MuiButton type={type} disabled={disabled} onClick={onClick} variant={variant}>
      {children}
    </MuiButton>
  );
};
export default Button;
