import {
  createTheme,
  createThemeContract,
} from '@vanilla-extract/css';

const global = {
  space: {
    small: '4px',
    medium: '8px',
    large: '16px',
  },
  fonts: {
    heading: 'Georgia, Times, Times New Roman, serif',
    body: 'system-ui',
  },
};

const themeContract = createThemeContract({
  ...global,
  color: {
    backgroundColor: '#FFF',
    onBackgroundColor: '#2B2B2B',
    onBackgroundHoverColor: 'green',
    primaryColor: '#6C5CE7',
    onPrimaryColor: '#FFFFFF',
    onPrimaryHoverColor: 'pink',
    onPrimaryDisabled: 'gray',
    borderPrimaryColor: '#6C5CE7',
    borderPrimaryHoverColor: '#8376EB',
    borderPrimaryFocusColor: '#897DEC',
    borderPrimaryActiveColor: '#8F83ED',
    positiveColor: '#37B26C',
    negativeColor: '#E62E5C',
    warningColor: '#FFC640',
    processColor: '#0984E3',
  },
});

export const themeClass = createTheme(themeContract, {
  ...global,
  color: {
    backgroundColor: '#FFF',
    onBackgroundColor: '#2B2B2B',
    onBackgroundHoverColor: 'green',
    primaryColor: '#6C5CE7',
    onPrimaryColor: '#FFFFFF',
    onPrimaryHoverColor: 'pink',
    onPrimaryDisabled: 'gray',
    borderPrimaryColor: '#6C5CE7',
    borderPrimaryHoverColor: '#8376EB',
    borderPrimaryFocusColor: '#897DEC',
    borderPrimaryActiveColor: '#8F83ED',
    positiveColor: '#37B26C',
    negativeColor: '#E62E5C',
    warningColor: '#FFC640',
    processColor: '#0984E3',
  },
});

export const otherThemeClass = createTheme(themeContract, {
  ...global,
  color: {
    backgroundColor: '#FFF',
    onBackgroundColor: 'blue',
    onBackgroundHoverColor: 'green',
    primaryColor: 'black',
    onPrimaryColor: '#FFFFFF',
    onPrimaryHoverColor: 'blue',
    onPrimaryDisabled: 'gray',
    borderPrimaryColor: 'blue',
    borderPrimaryHoverColor: 'blue',
    borderPrimaryFocusColor: 'blue',
    borderPrimaryActiveColor: 'blue',
    positiveColor: 'blue',
    negativeColor: 'blue',
    warningColor: 'blue',
    processColor: 'blue',
  },
});

export const vars = themeContract;
