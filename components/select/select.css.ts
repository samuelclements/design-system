import { style } from '@vanilla-extract/css';
import { vars } from '../theme.css';

/* reset */
export const buttonReset = style({
  all: 'unset',
});

export const SelectTrigger = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '4px',
  padding: '0 15px',
  fontSize: '13px',
  lineHeight: '1',
  height: '35px',
  gap: '5px',
  backgroundColor: 'white',
  color: vars.color.primaryColor,
  boxShadow: `0 2px 10px ${vars.color.borderPrimaryColor}}`,
  ':hover': {
    backgroundColor: vars.color.onPrimaryHoverColor,
  },
  ':focus': {
    boxShadow: '0 0 0 2px black',
  },

  selectors: {
    '&[data-placeholder]': {
      color: vars.color.primaryColor,
    },
  },
});

export const SelectIcon = style({
  color: vars.color.primaryColor,
});

export const SelectContent = style({
  overflow: 'hidden',
  backgroundColor: 'white',
  borderRadius: '6px',
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
});

export const SelectViewport = style({
  padding: '5px',
});

export const SelectItem = style({
  fontSize: '13px',
  lineHeight: '1',
  color: vars.color.primaryColor,
  borderRadius: '3px',
  display: 'flex',
  alignItems: 'center',
  height: '25px',
  padding: '0 35px 0 25px',
  position: 'relative',
  userSelect: 'none',
  selectors: {
    '&[data-disabled]': {
      color: vars.color.onPrimaryDisabled,
      pointerEvents: 'none',
    },
    '&[data-highlighted]': {
      outline: 'none',
      backgroundColor: vars.color.primaryColor,
      color: vars.color.onPrimaryHoverColor,
    },
  },
});

export const SelectLabel = style({
  padding: '0 25px',
  fontSize: '12px',
  lineHeight: '25px',
  color: vars.color.onPrimaryColor,
});

export const SelectSeparator = style({
  height: '1px',
  backgroundColor: vars.color.primaryColor,
  margin: '5px',
});

export const SelectItemIndicator = style({
  position: 'absolute',
  left: '0',
  width: '25px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const SelectScrollButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '25px',
  backgroundColor: 'white',
  color: vars.color.primaryColor,
  cursor: 'default',
});
