import MuiButton from '@mui/material/Button';
import { MouseEventHandler } from 'react';

type ButtonProps = {
  disabled: boolean;
  type: 'button' | 'submit';
  variant: 'text' | 'outlined' | 'contained';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const Button = ({ style, disabled, variant, type = 'button', children, onClick }: ButtonProps) => {
  return (
    <MuiButton style={style} type={type} disabled={disabled} onClick={onClick} variant={variant}>
      {children}
    </MuiButton>
  );
};
export default Button;
