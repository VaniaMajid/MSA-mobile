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
  popupCTAText: hp('2.2'), // 17px
  paragraphRegular: hp('2.2'), // 16px
  paragraphBold: hp('2.2'), // 16px
  paragraphSemiBold: hp('2.2'), // 16px
  headerSmallBold: hp('2.2'), // 16px
  ctaBoldTransparent: hp('2.2'), // 16px
  buttonSemiBold: hp('2.2'), // 16px
  labelMedium: hp('2.2'), // 16px
  paragraph: hp('2.1'), // 15px
  chatText: hp('2.1'), // 15px
  notificationHeader: hp('2.0'), // 15px
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
    fontFamily: 'Poppins-Black',
    fontSize: FontSize.headerBlack,
    color: Colors.darkGray,
    letterSpacing: 0.0,
  },
  headerBold: {
    fontFamily: 'Poppins-Bold',
    fontSize: FontSize.headerBlack,
    color: Colors.darkGray,
    letterSpacing: 0.0,
  },
  largeHeaderText: {
    fontFamily: 'Poppins-ExtraBold',
    fontSize: FontSize.largeHeaderText,
    color: Colors.darkGray,
    letterSpacing: 0.0,
  },
  largeHeaderBlack: {
    fontFamily: 'Poppins-Black',
    fontSize: FontSize.largeHeaderBlack,
    color: Colors.darkGray,
    letterSpacing: 0.0,
  },
  headerMediumBold: {
    fontFamily: 'Poppins-Bold',
    fontSize: FontSize.headerMediumBold,
    color: Colors.darkGray,
    letterSpacing: 0.0,
  },
  largeSubHeaderSemiBold: {
    fontFamily: 'Poppins-Semibold',
    fontSize: FontSize.largeSubHeaderSemiBold,
    color: Colors.darkGray,
    letterSpacing: 0.0,
  },
  middleTextNormal: {
    fontFamily: 'Poppins-Regular',
    fontSize: FontSize.middleTextNormal,
    color: Colors.darkGray,
    letterSpacing: 0.35,
  },
  subtextBlack: {
    fontFamily: 'Poppins-Bold',
    fontSize: FontSize.subtextBlack,
    color: Colors.darkGray,
    letterSpacing: 0.0,
  },
  inputFieldLabelText: {
    fontFamily: 'Poppins-Medium',
    fontSize: FontSize.inputFieldLabelText,
    color: Colors.darkGray,
    letterSpacing: 0.0,
  },
  uiLabelSemiBold: {
    fontFamily: 'Poppins-Semibold',
    fontSize: FontSize.uiLabelSemiBold,
    color: Colors.darkGray,
    letterSpacing: -0.41,
  },
  popupCTAText: {
    fontFamily: 'Poppins-Semibold',
    fontSize: FontSize.popupCTAText,
    color: Colors.darkGray,
    letterSpacing: -0.41,
  },
  paragraphRegular: {
    fontFamily: 'Poppins-Medium',
    fontSize: FontSize.paragraphRegular,
    color: Colors.darkGray,
    letterSpacing: 0.0,
  },
  paragraphBold: {
    fontFamily: 'Poppins-Bold',
    fontSize: FontSize.paragraphBold,
    color: Colors.darkGray,
    letterSpacing: 0.0,
  },
  paragraphSemiBold: {
    fontFamily: 'Poppins-Semibold',
    fontSize: FontSize.paragraphSemiBold,
    color: Colors.darkGray,
    letterSpacing: 0.0,
  },
  headerSmallBold: {
    fontFamily: 'Poppins-Semibold',
    fontSize: FontSize.headerSmallBold,
    color: Colors.darkGray,
    letterSpacing: 0.0,
  },
  ctaBoldTransparent: {
    fontFamily: 'Poppins-Bold',
    fontSize: FontSize.ctaBoldTransparent,
    color: Colors.darkGray,
    letterSpacing: 0.0,
  },
  buttonSemiBold: {
    fontFamily: 'Poppins-Semibold',
    fontSize: FontSize.buttonSemiBold,
    color: Colors.darkGray,
    letterSpacing: 0.0,
  },
  labelMedium: {
    fontFamily: 'Poppins-Medium',
    fontSize: FontSize.labelMedium,
    color: Colors.darkGray,
    letterSpacing: 0.0,
  },
  paragraph: {
    fontFamily: 'Poppins-Regular',
    fontSize: FontSize.paragraph,
    color: Colors.darkGray,
    letterSpacing: 0.0,
  },
  chatText: {
    fontFamily: 'Poppins-Regular',
    fontSize: FontSize.chatText,
    color: Colors.darkGray,
    letterSpacing: 0.0,
  },
  notificationHeader: {
    fontFamily: 'Poppins-Semibold',
    fontSize: FontSize.notificationHeader,
    color: Colors.darkGray,
    letterSpacing: 0.0,
  },
  linkBold: {
    fontFamily: 'Poppins-Bold',
    fontSize: FontSize.linkBold,
    color: Colors.darkGray,
    letterSpacing: 0.0,
  },
  paragraphSmallSemiBold: {
    fontFamily: 'Poppins-Semibold',
    fontSize: FontSize.paragraphSmallSemiBold,
    color: Colors.darkGray,
    letterSpacing: 0.0,
  },
  paragraphRegularSmall: {
    fontFamily: 'Poppins-Regular',
    fontSize: FontSize.paragraphRegularSmall,
    color: Colors.darkGray,
    letterSpacing: 0.0,
  },
  linkSemiBold: {
    fontFamily: 'Poppins-Semibold',
    fontSize: FontSize.linkSemiBold,
    color: Colors.darkGray,
    letterSpacing: 0.0,
  },
  inputFieldSmall: {
    fontFamily: 'Poppins-Medium',
    fontSize: FontSize.inputFieldSmall,
    color: Colors.darkGray,
    letterSpacing: 0.0,
  },
  notificationSubtext: {
    fontFamily: 'Poppins-Regular',
    fontSize: FontSize.notificationSubtext,
    color: Colors.darkGray,
    letterSpacing: 0.0,
  },
  previewSubtext: {
    fontFamily: 'Poppins-Regular',
    fontSize: FontSize.previewSubtext,
    color: Colors.darkGray,
    letterSpacing: 0.0,
  },
  subtextSmall: {
    fontFamily: 'Poppins-Regular',
    fontSize: FontSize.subtextSmall,
    color: Colors.darkGray,
    letterSpacing: 0.0,
  },
  filterText: {
    fontFamily: 'Poppins-Semibold',
    fontSize: FontSize.filterText,
    color: Colors.darkGray,
    letterSpacing: -0.24,
  },
  medicalColumnText: {
    fontFamily: 'Poppins-Regular',
    fontSize: FontSize.medicalColumnText,
    color: Colors.darkGray,
    letterSpacing: 0.0,
  },
  allCapsSubtext: {
    fontFamily: 'Poppins-Semibold',
    fontSize: FontSize.allCapsSubtext,
    color: Colors.darkGray,
    letterSpacing: 0.0,
  },
  navigationSubtext: {
    fontFamily: 'Poppins-Regular',
    fontSize: FontSize.navigationSubtext,
    color: Colors.darkGray,
    letterSpacing: -0.24,
  },
};

export default fontConfig;
