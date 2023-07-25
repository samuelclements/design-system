import {
    defineProperties,
    createSprinkles
  } from '@vanilla-extract/sprinkles';
import { vars } from './theme.css';
  
  const space = vars.space
  
  const responsiveProperties = defineProperties({
    conditions: {
      mobile: {},
      tablet: { '@media': 'screen and (min-width: 768px)' },
      desktop: { '@media': 'screen and (min-width: 1024px)' }
    },
    defaultCondition: 'mobile',
    responsiveArray: ['mobile', 'tablet', 'desktop'],
    properties: {
      display: ['none', 'flex', 'block', 'inline'],
      flexDirection: ['row', 'column'],
      justifyContent: [
        'stretch',
        'flex-start',
        'center',
        'flex-end',
        'space-around',
        'space-between'
      ],
      alignItems: [
        'stretch',
        'flex-start',
        'center',
        'flex-end'
      ],
      paddingTop: space,
      paddingBottom: space,
      paddingLeft: space,
      paddingRight: space,
      borderRadius: {
        none: '0px',
        small: '2px',
        standard: '4px',
        large: '6px',
        full: '9999px',
      },
      // etc.
    },
    shorthands: {
      padding: [
        'paddingTop',
        'paddingBottom',
        'paddingLeft',
        'paddingRight'
      ],
      paddingX: ['paddingLeft', 'paddingRight'],
      paddingY: ['paddingTop', 'paddingBottom'],
      placeItems: ['justifyContent', 'alignItems']
    }
  });
  
  const colors = vars.color;
  
  const colorProperties = defineProperties({
    conditions: {
      lightMode: {},
      darkMode: { '@media': '(prefers-color-scheme: dark)' }
    },
    defaultCondition: 'lightMode',
    properties: {
      color: colors,
      background: colors
      // etc.
    }
  });
  
  export const sprinkles = createSprinkles(
    responsiveProperties,
    colorProperties
  );
  
  // It's a good idea to export the Sprinkles type too
  export type Sprinkles = Parameters<typeof sprinkles>[0];