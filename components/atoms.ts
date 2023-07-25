import * as resetStyles from './reset.css';
import { sprinkles, Sprinkles } from './sprinkles.css';

export interface Atoms extends Sprinkles {
  reset?: keyof JSX.IntrinsicElements;
}

export const extractAtoms = <P extends object>(props: P) => {
  const atomProps: Record<string, unknown> = {};
  const otherProps: Record<string, unknown> = {};

  for (const key in props) {
    if (sprinkles.properties.has(key as keyof Omit<Atoms, 'reset'>)) {
      atomProps[key] = props[key as keyof typeof props];
    } else {
      otherProps[key] = props[key as keyof typeof props];
    }
  }

  return [atomProps, otherProps];
};

export function atoms(atoms: Atoms) {
  const { reset, ...rest } = atoms;
  const sprinklesClassNames = sprinkles(rest);

  if (!reset) {
    return sprinklesClassNames;
  }

  const elementReset =
    resetStyles.element[reset as keyof typeof resetStyles.element];

  return `${resetStyles.base}${elementReset ? ` ${elementReset}` : ''}${
    sprinklesClassNames ? ` ${sprinklesClassNames}` : ''
  }`;
}
