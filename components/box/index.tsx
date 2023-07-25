import {
  type AllHTMLAttributes,
  type ElementType,
  forwardRef,
} from 'react';
import clsx, { ClassValue} from 'clsx';
import { atoms, extractAtoms } from "../atoms";
import type { Atoms } from "../atoms";

export interface BoxBaseProps extends Omit<Atoms, 'reset'> {
  className?: ClassValue;
}

export interface BoxProps
  extends BoxBaseProps,
    Omit<
    AllHTMLAttributes<HTMLElement>,
      'width' | 'height' | 'className' | 'color'
    > {
  component?: ElementType;
}

export const Box = forwardRef<HTMLElement, BoxProps>((props, ref) => {
    const { component: Component = "div", className, ...rest } = props;
    const [atomsProps, otherProps] = extractAtoms(rest);
    const atomicClasses = atoms({
      reset: typeof Component === "string" ? Component : "div",
      ...atomsProps,
    });
  
    const userClasses = clsx(className);

    const combinedClasses = `${atomicClasses}${
      userClasses ? ` ${userClasses}` : ''
    }`;

    return (
      <Component
        {...otherProps}
        className={combinedClasses}
        ref={ref}
      />
    );
  });