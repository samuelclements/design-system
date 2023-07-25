import { Box } from '../box';
import type { BoxProps } from '../box';
import { buttonVariant } from './button.css';

type ButtonSize = 'small' | 'large';

export interface ButtonProps extends Omit<BoxProps, 'size'> {
  size?: ButtonSize;
  variant?: keyof typeof buttonVariant;
}

const Button = ({ size, variant, ...boxProps }: ButtonProps) => {
  return (
    <Box
      component="button"
      borderRadius="large"
      className={buttonVariant[variant || 'solid']}
      padding={size === 'small' ? ['small', 'medium'] : ['medium', 'large']}
      {...boxProps}
    />
  );
};

export default Button;
