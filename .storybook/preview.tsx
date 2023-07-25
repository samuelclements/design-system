import React, { useEffect } from 'react';
import { Preview } from '@storybook/react';
import { otherThemeClass, themeClass } from '../components/theme.css';

const clearStyles = (element: HTMLElement) => {
  [otherThemeClass, themeClass].forEach((className) => {
    element.classList.remove(className);
  });
};

const applyStyle = (element: HTMLElement, className: string) => {
  element.classList.add(className);
};

const withThemeProvider = (Story, context) => {

  const themes = {
    'default': themeClass,
    'other': otherThemeClass,
  }

  useEffect(() => {
    const body = window.document.body;
    clearStyles(body);
    applyStyle(body, themes[context.globals.theme]);
    return () => {
      clearStyles(body);
    };
  }, [context.globals.theme]);

  return <Story />;
};

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'default',
      toolbar: {
        // The label to show for this toolbar item
        title: 'Theme',
        icon: 'circlehollow',
        // Array of plain string values or MenuItem shape (see below)
        items: ['default', 'other'],
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },
  decorators: [withThemeProvider],
};

export default preview;
