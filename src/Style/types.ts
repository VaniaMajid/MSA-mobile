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
export interface IThemeFonts {
  h1: IFontType;
  h2: IFontType;
  h3: IFontType;
  h4: IFontType;
  h5: IFontType;
  sh1: IFontType;
  sh2: IFontType;
  sh3: IFontType;
  sh4: IFontType;
  sh5: IFontType;
  sh2light: IFontType;
  sh4light: IFontType;
  st1: IFontType;
  st2: IFontType;
  st3: IFontType;
  st4: IFontType;
  ralewayMedium: IFontType;
  st2Med: IFontType;
  textLink: IFontType;
  textLink1: IFontType;
  textLink2: IFontType;
  numberPoints: IFontType;
  body0: IFontType;
  body1: IFontType;
  body2: IFontType;
  body3: IFontType;
  body4: IFontType;
  body5: IFontType;
  body6: IFontType;
  body7: IFontType;
  num1: IFontType;
  num2: IFontType;
  num3: IFontType;
  btn1: IFontType;
  btn2: IFontType;
  btn3: IFontType;
  btn4: IFontType;
  nav: IFontType;
  fieldError: IFontType;
  text1: IFontType;
  text2: IFontType;
  text3: IFontType;
}

export type colorType = keyof PickByValue<typeof Colors, string>;
