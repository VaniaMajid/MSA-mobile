import Colors from './Colors';

type PickByValue<T, ValueType> = Pick<
  T,
  {
    [Key in keyof T]: T[Key] extends ValueType ? Key : never;
  }[keyof T]
>;

export interface IFontType {
  fontFamily: string;
  fontSize: number;
  color: string;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  letterSpacing: number;
}
import { TextStyle } from 'react-native';
export interface IThemeFonts {
  headerBlack: TextStyle;
  headerBold: TextStyle;
  largeHeaderText: TextStyle;
  largeHeaderBlack: TextStyle;
  headerMediumBold: TextStyle;
  largeSubHeaderSemiBold: TextStyle;
  middleTextNormal: TextStyle;
  subtextBlack: TextStyle;
  inputFieldLabelText: TextStyle;
  uiLabelSemiBold: TextStyle;
  popupCTAText: TextStyle;
  paragraphRegular: TextStyle;
  paragraphBold: TextStyle;
  paragraphSemiBold: TextStyle;
  headerSmallBold: TextStyle;
  ctaBoldTransparent: TextStyle;
  buttonBold: TextStyle;
  buttonSemiBold: TextStyle;
  labelMedium: TextStyle;
  paragraph: TextStyle;
  chatText: TextStyle;
  notificationHeader: TextStyle;
  linkBold: TextStyle;
  paragraphSmallSemiBold: TextStyle;
  subHeadingSemibold: TextStyle;
  paragraphRegularSmall: TextStyle;
  linkSemiBold: TextStyle;
  inputFieldSmall: TextStyle;
  notificationSubtext: TextStyle;
  previewSubtext: TextStyle;
  subtextSmall: TextStyle;
  filterText: TextStyle;
  medicalColumnText: TextStyle;
  allCapsSubtext: TextStyle;
  navigationSubtext: TextStyle;
}


export type colorType = keyof PickByValue<typeof Colors, string>;
