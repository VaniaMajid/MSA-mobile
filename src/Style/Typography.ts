import Colors from './Colors';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {IThemeFonts} from './types';

export const getDimensions = {
  height: hp('100%'),
};

export const FontSize = {
  font: hp('2.5'), //16
  h1: hp('2.6'), //22
  h2: hp('5.7'), //48
  h3: hp('2.3'), //18
  h5: hp('4.6'), //36
  sh1: hp('2.35'), //20
  sh2: hp('2.3'), //18
  sh3: hp('2.4'),
  st1: hp('1.65'), //14
  st2: hp('1.9'), //16
  st3: hp('1.65'), //14
  numberPoints: hp('5'),
  body1: hp('1.65'), //14
  body2: hp('1.65'), //14
  body3: hp('1.43'), //12
  body4: hp('1.9'), //16
  btn1: hp('1.9'), //16
  btn2: hp('1.65'), //14
  btn3: hp('1.65'), //14
  textLink1: hp('1.6'), //14
  textLink2: hp('2.6'), //22
  nav: hp('1.9'), //14
  num1: hp('3.0'),
  num2: hp('2.0'),
  num3: hp('1.0'),
  text1: hp('1.43'), //12
  text2: hp('2.15'), //18
  text3: hp('4.15'), //18

  fieldError: hp('1.6'),
};

const fontConfig: IThemeFonts = {
  h1: {
    fontFamily: 'ClarendonLTStd',
    fontSize: FontSize.h1,
    color: Colors.primaryDarkGray,
    letterSpacing: 0.3,
  },
  h2: {
    fontFamily: 'ClarendonLTStd',
    fontSize: FontSize.h2,
    fontWeight: '400',
    color: Colors.primaryDarkGray,
    letterSpacing: 0.2,
  },
  h3: {
    fontFamily: 'ClarendonLTStd',
    fontSize: FontSize.h3,
    fontWeight: '300',
    color: Colors.black,
    letterSpacing: 0.3,
  },

  h4: {
    fontFamily: 'ClarendonLtStd-Bold',
    fontSize: FontSize.h1,
    color: Colors.primaryDarkGray,
    letterSpacing: 0.3,
  },
  h5: {
    fontFamily: 'ClarendonLtStd',
    fontSize: FontSize.h5,
    color: Colors.primaryDarkGray,
    letterSpacing: 0.3,
  },

  sh1: {
    fontFamily: 'ClarendonLTStd',
    fontSize: FontSize.sh1,
    color: Colors.primaryDarkGray,
    letterSpacing: 0.2,
  },
  sh2: {
    fontFamily: 'ClarendonLtStd-Bold',
    fontSize: FontSize.sh2,
    color: Colors.primaryDarkGray,
    letterSpacing: 0.2,
  },
  sh3: {
    fontFamily: 'ClarendonLTStd',
    fontSize: FontSize.sh1,
    color: Colors.primaryDarkGray,
    fontWeight: '400',
    letterSpacing: 0.2,
  },
  sh4: {
    fontFamily: 'ClarendonLTStd',
    fontSize: FontSize.sh2,
    color: Colors.primaryDarkGray,
    fontWeight: '400',
    letterSpacing: 0.2,
  },
  sh5: {
    fontFamily: 'ClarendonLTStd',
    fontSize: FontSize.sh3,
    color: Colors.primaryDarkGray,
    fontWeight: '400',
    letterSpacing: 0.2,
  },
  sh2light: {
    fontFamily: 'ClarendonLTStd',
    fontSize: FontSize.sh2,
    fontWeight: '300',
    color: Colors.primaryDarkGray,
    letterSpacing: 0.2,
  },
  sh4light: {
    fontFamily: 'ClarendonLtStd-Light',
    fontSize: FontSize.sh2,
    color: Colors.primaryDarkGray,
    letterSpacing: 0.2,
  },
  st1: {
    fontFamily: 'VisbyCf-Bold',
    fontSize: FontSize.st1,
    color: Colors.primaryDarkGray,
    letterSpacing: 0.3,
  },
  st2: {
    fontFamily: 'VisbyCF-ExtraBold',
    fontSize: FontSize.st2,
    color: Colors.primaryDarkGray,
    letterSpacing: 0.3,
  },
  st3: {
    fontFamily: 'VisbyCF-ExtraBold',
    fontSize: FontSize.st3,
    color: Colors.primaryDarkGray,
    letterSpacing: 0.3,
  },
  st4: {
    fontFamily: 'VisbyCf-DemiBold',
    fontSize: FontSize.btn3,
    fontWeight: '600',
    color: Colors.primaryMediumBlue,
    letterSpacing: 0.3,
  },
  st2Med: {
    fontFamily: 'VisbyCF-ExtraBold',
    fontSize: FontSize.st2,
    color: Colors.primaryDarkGray,
    letterSpacing: 0.3,
  },
  numberPoints: {
    fontFamily: 'VisbyCf-Bold',
    fontSize: FontSize.numberPoints,
    color: Colors.primaryMediumBlue,
    letterSpacing: 0.2,
  },
  body0: {
    fontFamily: 'Raleway-Regular',
    fontSize: FontSize.body1,
    fontWeight: '500',
    color: Colors.primaryDarkGray,
    letterSpacing: 0.2,
  },
  body1: {
    fontFamily: 'Raleway-Regular',
    fontSize: FontSize.body1,
    fontWeight: '400',
    color: Colors.primaryDarkGray,
    letterSpacing: 0.2,
  },
  body2: {
    fontFamily: 'VisbyCf-Medium',
    fontWeight: 'normal',
    fontSize: FontSize.body2,
    color: Colors.primaryDarkGray,
    letterSpacing: 0.2,
  },
  body3: {
    fontFamily: 'VisbyCf-Medium',
    fontWeight: '600',
    fontSize: FontSize.body3,
    color: Colors.primaryDarkGray,
    letterSpacing: 0.4,
  },
  body4: {
    fontFamily: 'Raleway-Regular',
    fontSize: FontSize.body4,
    fontWeight: '400',
    color: Colors.primaryDarkGray,
    letterSpacing: 0.2,
  },
  body5: {
    fontFamily: 'VisbyCf-Medium',
    fontWeight: '600',
    fontSize: FontSize.body2,
    color: Colors.primaryDarkGray,
    letterSpacing: 0.2,
  },
  body6: {
    fontFamily: 'VisbyCf-Medium',
    fontWeight: '600',
    fontSize: FontSize.body2,
    color: Colors.primaryDarkGray,
    letterSpacing: 0.4,
  },
  body7: {
    fontFamily: 'VisbyCf-Medium',
    fontWeight: '400',
    fontSize: FontSize.body2,
    color: Colors.primaryDarkGray,
    letterSpacing: 0.4,
  },
  num1: {
    fontFamily: 'VisbyCF-ExtraBold',
    fontSize: FontSize.num1,
    color: Colors.primaryDarkGray,
    letterSpacing: 0.4,
  },
  num2: {
    fontFamily: 'VisbyCF-ExtraBold',
    fontSize: FontSize.num2,
    color: Colors.primaryDarkGray,
    letterSpacing: 0.2,
  },
  num3: {
    fontFamily: 'VisbyCF-ExtraBold',
    fontSize: FontSize.num3,
    color: Colors.primaryDarkGray,
    letterSpacing: 0.2,
  },
  btn1: {
    fontFamily: 'VisbyCF-ExtraBold',
    fontSize: FontSize.btn1,
    color: Colors.primaryMediumBlue,
    letterSpacing: 0.3,
  },
  btn2: {
    fontFamily: 'VisbyCf-Bold',
    fontSize: FontSize.btn2,
    fontWeight: '400',
    color: Colors.primaryMediumBlue,
    letterSpacing: 0.3,
  },
  btn3: {
    fontFamily: 'VisbyCf-DemiBold',
    fontSize: FontSize.btn3,
    fontWeight: '400',
    color: Colors.primaryMediumBlue,
    letterSpacing: 0.3,
  },
  btn4: {
    fontFamily: 'VisbyCF-ExtraBold',
    fontSize: FontSize.btn2,
    color: Colors.primaryMediumBlue,
    letterSpacing: 0.3,
  },
  nav: {
    fontFamily: 'Raleway-Regular',
    fontSize: FontSize.nav,
    color: Colors.primaryDarkGray,
    letterSpacing: 0.2,
  },
  textLink: {
    fontFamily: 'VisbyCf-Bold',
    fontSize: FontSize.nav,
    color: Colors.primaryDarkGray,
    letterSpacing: 0.3,
  },
  textLink1: {
    fontFamily: 'VisbyCF-ExtraBold',
    fontSize: FontSize.textLink1,
    fontWeight: 'bold',
    color: Colors.primaryDarkGray,
    letterSpacing: 0.3,
  },
  textLink2: {
    fontFamily: 'VisbyCF-ExtraBold',
    fontSize: FontSize.textLink2,
    fontWeight: '900',
    color: Colors.primaryDarkGray,
    letterSpacing: 0.3,
  },
  text1: {
    fontFamily: 'VisbyCf-Bold',
    fontSize: FontSize.text1,
    color: Colors.primaryDarkGray,
    letterSpacing: 0.2,
  },
  text2: {
    fontFamily: 'VisbyCF-ExtraBold',
    fontSize: FontSize.text1,
    color: Colors.primaryDarkGray,
    letterSpacing: 0.2,
  },
  text3: {
    fontFamily: 'VisbyCF-ExtraBold',
    fontSize: FontSize.text2,
    color: Colors.primaryDarkGray,
    letterSpacing: 0.2,
  },

  ralewayMedium: {
    fontFamily: 'Raleway-Medium',
    fontSize: FontSize.body1,
    fontWeight: '500',
    color: Colors.primaryDarkGray,
    letterSpacing: 0.2,
  },
  fieldError: {
    fontFamily: 'VisbyCF-ExtraBold',
    fontSize: FontSize.fieldError,
    color: Colors.secondaryRed,
    letterSpacing: 0.2,
  },
};

export default fontConfig;
