import React, {CSSProperties, FC, SVGProps} from 'react';
import {IconPropsWeb} from '../props';
import {getSize} from './getSize';

type MakeIcon = {
  focusable?: boolean | 'true' | 'false' | 'auto';
  'aria-hidden'?: boolean | 'true' | 'false';
  role?: string;
  style?: CSSProperties;
  className?: string;
  transform?: string;
  title?: string;
};

export const makeIconWeb = (IconComponent: FC<MakeIcon>): FC<IconPropsWeb> => {
  return ({size = 'xxxs', color}) => {
    const iconSize = getSize(size);
    const svgProp: SVGProps<SVGSVGElement> = {
      width: iconSize,
      height: iconSize,
      color,
    };
    return <IconComponent {...svgProp} />;
  };
};
