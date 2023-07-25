import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../theme.css';

export const buttonBase = style({
  cursor: 'pointer',
});

export const buttonVariant = styleVariants({
  solid: [
    buttonBase,
    {
      backgroundColor: vars.color.primaryColor,
      selectors: {
        '&:hover': {
          backgroundColor: vars.color.onPrimaryHoverColor,
        },
        '&:active': {
          backgroundColor: vars.color.onPrimaryColor,
        },
      },
    },
  ],
  ghost: [
    buttonBase,
    {
      backgroundColor: vars.color.backgroundColor,
      selectors: {
        '&:hover': {
          backgroundColor: vars.color.onBackgroundHoverColor,
        },
        '&:active': {
          backgroundColor: vars.color.onBackgroundColor,
        },
      },
    },
  ],
});
