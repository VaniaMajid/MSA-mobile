import {AccessibilityProps} from './types/AccessibilityProps';

export type IconPropsWeb = {
  /**
   * Color of the icon
   */
  color?: string;

  /**
   * Icon size
   */
  size?: string;

  /**
   * Indicates whether the icon should be displayed in right-to-left direction.
   *
   * @default false
   */
  isRTL?: boolean;
};

export type IconProps = {
  /**
   * Used to locate this view in end-to-end tests.
   */
  testID?: string;

  /**
   * If set, will add accessibility properties to icon
   */
  accessibility?: AccessibilityProps;
} & IconPropsWeb;
