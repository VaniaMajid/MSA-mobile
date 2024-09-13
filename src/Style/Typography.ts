import Colors from './Colors';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {IThemeFonts} from './types';

export const getDimensions = {
  height: hp('100%'),
};

export const FontSize = {
  headerBlack: hp('4'), // 30px
  headerBold: hp('4'), // 30px
  largeHeaderText: hp('3.7'), // 28px
  largeHeaderBlack: hp('3.3'), // 28px
  headerMediumBold: hp('3.2'), // 24px
  largeSubHeaderSemiBold: hp('2.7'), // 20px
  middleTextNormal: hp('2.7'), // 20px
  subtextBlack: hp('2.2'), // 18px
  inputFieldLabelText: hp('2.4'), // 18px
  uiLabelSemiBold: hp('2.3'), // 17px
  popupCTAText: hp('2.3'), // 17px
  paragraphRegular: hp('2.2'), // 16px
  paragraphBold: hp('2.2'), // 16px
  paragraphSemiBold: hp('2.2'), // 16px
  headerSmallBold: hp('2.2'), // 16px
  ctaBoldTransparent: hp('2.2'), // 16px
  buttonSemiBold: hp('2.2'), // 16px
  labelMedium: hp('2.2'), // 16px
  paragraph: hp('2.1'), // 15px
  chatText: hp('2.1'), // 15px
  notificationHeader: hp('2.1'), // 15px
  linkBold: hp('1.9'), // 14px
  paragraphSmallSemiBold: hp('1.9'), // 14px
  paragraphRegularSmall: hp('1.9'), // 14px
  linkSemiBold: hp('1.9'), // 14px
  inputFieldSmall: hp('1.9'), // 14px
  notificationSubtext: hp('1.9'), // 14px
  previewSubtext: hp('1.8'), // 13px
  filterText: hp('1.7'), // 12px
  subtextSmall: hp('1.6'), // 11px
  medicalColumnText: hp('1.7'), // 12px
  allCapsSubtext: hp('1.4'), // 11px
  navigationSubtext: hp('1.5'), // 10px
};

const fontConfig: IThemeFonts = {
  headerBlack: {
    fontFamily: 'Lato-Black',
    fontSize: FontSize.headerBlack,
    color: Colors.darkGray,
    letterSpacing: 0.0,
  },
  headerBold: {
    fontFamily: 'Lato-Bold',
    fontSize: FontSize.headerBlack,
    color: Colors.darkGray,
    letterSpacing: 0.0,
  },
  largeHeaderText: {
    fontFamily: 'Lato-ExtraBold',
    fontSize: FontSize.largeHeaderText,
    color: Colors.darkGray,
    letterSpacing: 0.0,
  },
  largeHeaderBlack: {
    fontFamily: 'Lato-Black',
    fontSize: FontSize.largeHeaderBlack,
    color: Colors.darkGray,
    letterSpacing: 0.0,
  },
  headerMediumBold: {
    fontFamily: 'Lato-Bold',
    fontSize: FontSize.headerMediumBold,
    color: Colors.darkGray,
    letterSpacing: 0.0,
  },
  largeSubHeaderSemiBold: {
    fontFamily: 'Lato-Semibold',
    fontSize: FontSize.largeSubHeaderSemiBold,
    color: Colors.darkGray,
    letterSpacing: 0.0,
  },
  middleTextNormal: {
    fontFamily: 'Lato-Regular',
    fontSize: FontSize.middleTextNormal,
    color: Colors.darkGray,
    letterSpacing: 0.35,
  },
  subtextBlack: {
    fontFamily: 'Lato-Black',
    fontSize: FontSize.subtextBlack,
    color: Colors.darkGray,
    letterSpacing: 0.0,
  },
  inputFieldLabelText: {
    fontFamily: 'Lato-Medium',
    fontSize: FontSize.inputFieldLabelText,
    color: Colors.darkGray,
    letterSpacing: 0.0,
  },
  uiLabelSemiBold: {
    fontFamily: 'Lato-Semibold',
    fontSize: FontSize.uiLabelSemiBold,
    color: Colors.darkGray,
    letterSpacing: -0.41,
  },
  popupCTAText: {
    fontFamily: 'Lato-Semibold',
    fontSize: FontSize.popupCTAText,
    color: Colors.darkGray,
    letterSpacing: -0.41,
  },
  paragraphRegular: {
    fontFamily: 'Lato-Medium',
    fontSize: FontSize.paragraphRegular,
    color: Colors.darkGray,
    letterSpacing: 0.0,
  },
  paragraphBold: {
    fontFamily: 'Lato-Bold',
    fontSize: FontSize.paragraphBold,
    color: Colors.darkGray,
    letterSpacing: 0.0,
  },
  paragraphSemiBold: {
    fontFamily: 'Lato-Semibold',
    fontSize: FontSize.paragraphSemiBold,
    color: Colors.darkGray,
    letterSpacing: 0.0,
  },
  headerSmallBold: {
    fontFamily: 'Lato-Semibold',
    fontSize: FontSize.headerSmallBold,
    color: Colors.darkGray,
    letterSpacing: 0.0,
  },
  ctaBoldTransparent: {
    fontFamily: 'Lato-Bold',
    fontSize: FontSize.ctaBoldTransparent,
    color: Colors.darkGray,
    letterSpacing: 0.0,
  },
  buttonSemiBold: {
    fontFamily: 'Lato-Semibold',
    fontSize: FontSize.buttonSemiBold,
    color: Colors.darkGray,
    letterSpacing: 0.0,
  },
  labelMedium: {
    fontFamily: 'Lato-Medium',
    fontSize: FontSize.labelMedium,
    color: Colors.darkGray,
    letterSpacing: 0.0,
  },
  paragraph: {
    fontFamily: 'Lato-Regular',
    fontSize: FontSize.paragraph,
    color: Colors.darkGray,
    letterSpacing: 0.0,
  },
  chatText: {
    fontFamily: 'Lato-Regular',
    fontSize: FontSize.chatText,
    color: Colors.darkGray,
    letterSpacing: 0.0,
  },
  notificationHeader: {
    fontFamily: 'Lato-Semibold',
    fontSize: FontSize.notificationHeader,
    color: Colors.darkGray,
    letterSpacing: 0.0,
  },
  linkBold: {
    fontFamily: 'Lato-Bold',
    fontSize: FontSize.linkBold,
    color: Colors.darkGray,
    letterSpacing: 0.0,
  },
  paragraphSmallSemiBold: {
    fontFamily: 'Lato-Semibold',
    fontSize: FontSize.paragraphSmallSemiBold,
    color: Colors.darkGray,
    letterSpacing: 0.0,
  },
  paragraphRegularSmall: {
    fontFamily: 'Lato-Regular',
    fontSize: FontSize.paragraphRegularSmall,
    color: Colors.darkGray,
    letterSpacing: 0.0,
  },
  linkSemiBold: {
    fontFamily: 'Lato-Semibold',
    fontSize: FontSize.linkSemiBold,
    color: Colors.darkGray,
    letterSpacing: 0.0,
  },
  inputFieldSmall: {
    fontFamily: 'Lato-Medium',
    fontSize: FontSize.inputFieldSmall,
    color: Colors.darkGray,
    letterSpacing: 0.0,
  },
  notificationSubtext: {
    fontFamily: 'Lato-Regular',
    fontSize: FontSize.notificationSubtext,
    color: Colors.darkGray,
    letterSpacing: 0.0,
  },
  previewSubtext: {
    fontFamily: 'Lato-Regular',
    fontSize: FontSize.previewSubtext,
    color: Colors.darkGray,
    letterSpacing: 0.0,
  },
  subtextSmall: {
    fontFamily: 'Lato-Regular',
    fontSize: FontSize.subtextSmall,
    color: Colors.darkGray,
    letterSpacing: 0.0,
  },
  filterText: {
    fontFamily: 'Lato-Semibold',
    fontSize: FontSize.filterText,
    color: Colors.darkGray,
    letterSpacing: -0.24,
  },
  medicalColumnText: {
    fontFamily: 'Lato-Regular',
    fontSize: FontSize.medicalColumnText,
    color: Colors.darkGray,
    letterSpacing: 0.0,
  },
  allCapsSubtext: {
    fontFamily: 'Lato-Semibold',
    fontSize: FontSize.allCapsSubtext,
    color: Colors.darkGray,
    letterSpacing: 0.0,
  },
  navigationSubtext: {
    fontFamily: 'Lato-Regular',
    fontSize: FontSize.navigationSubtext,
    color: Colors.darkGray,
    letterSpacing: -0.24,
  },
};

export default fontConfig;
