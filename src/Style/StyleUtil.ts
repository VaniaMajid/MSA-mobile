import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Colors from './Colors';
import Spacing from './Spacing';

const screenSize = wp('100%') + hp('100%');

function handleMargins(margin: number | Array<number>) {
  if (typeof margin === 'number') {
    return {
      marginTop: margin,
      marginRight: margin,
      marginBottom: margin,
      marginLeft: margin,
    };
  }

  if (typeof margin === 'object') {
    const marginSize = Object.keys(margin).length;
    switch (marginSize) {
      case 1:
        return {
          marginTop: margin[0],
          marginRight: margin[0],
          marginBottom: margin[0],
          marginLeft: margin[0],
        };
      case 2:
        return {
          marginTop: margin[0],
          marginRight: margin[1],
          marginBottom: margin[0],
          marginLeft: margin[1],
        };
      case 3:
        return {
          marginTop: margin[0],
          marginRight: margin[1],
          marginBottom: margin[2],
          marginLeft: margin[1],
        };
      default:
        return {
          marginTop: margin[0],
          marginRight: margin[1],
          marginBottom: margin[2],
          marginLeft: margin[3],
        };
    }
  }
}

function handlePaddings(padding: number | Array<number>) {
  if (typeof padding === 'number') {
    return {
      paddingTop: padding,
      paddingRight: padding,
      paddingBottom: padding,
      paddingLeft: padding,
    };
  }

  if (typeof padding === 'object') {
    const paddingSize = Object.keys(padding).length;
    switch (paddingSize) {
      case 1:
        return {
          paddingTop: padding[0],
          paddingRight: padding[0],
          paddingBottom: padding[0],
          paddingLeft: padding[0],
        };
      case 2:
        return {
          paddingTop: padding[0],
          paddingRight: padding[1],
          paddingBottom: padding[0],
          paddingLeft: padding[1],
        };
      case 3:
        return {
          paddingTop: padding[0],
          paddingRight: padding[1],
          paddingBottom: padding[2],
          paddingLeft: padding[1],
        };
      default:
        return {
          paddingTop: padding[0],
          paddingRight: padding[1],
          paddingBottom: padding[2],
          paddingLeft: padding[3],
        };
    }
  }
}

function commonUtils() {
  return StyleSheet.create({
    /* Column Layouts */
    column: {
      flexDirection: 'column',
    },
    columnReverse: {
      flexDirection: 'column-reverse',
    },
    colCenter: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    colVCenter: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    colHCenter: {
      flexDirection: 'column',
      justifyContent: 'center',
    },
    /* Row Layouts */
    row: {
      flexDirection: 'row',
    },
    rowReverse: {
      flexDirection: 'row-reverse',
    },
    rowCenter: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    rowVCenter: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    rowHCenter: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    /* Default Layouts */
    center: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    alignItemsCenter: {
      alignItems: 'center',
    },
    alignItemsStart: {
      alignItems: 'flex-start',
    },
    alignItemsEnd: {
      alignItems: 'flex-end',
    },
    alignItemsStretch: {
      alignItems: 'stretch',
    },
    justifyContentCenter: {
      justifyContent: 'center',
    },
    justifyContentAround: {
      justifyContent: 'space-around',
    },
    justifyContentBetween: {
      justifyContent: 'space-between',
    },
    justifyContentEnd: {
      justifyContent: 'flex-end',
    },
    justifyContentStart: {
      justifyContent: 'flex-start',
    },
    selfStretch: {
      alignSelf: 'stretch',
    },
    alignSelfStart: {
      alignSelf: 'flex-start',
    },
    alignSelfEnd: {
      alignSelf: 'flex-end',
    },
    alignSelfCenter: {
      alignSelf: 'center',
    },
    /* Sizes Layouts */
    noFlex: {
      flex: 0,
    },
    flexWrap: {
      flexWrap: 'wrap',
    },
    fill: {
      flex: 1,
    },
    flex2: {
      flex: 2,
    },
    flex3: {
      flex: 3,
    },
    flex4: {
      flex: 4,
    },
    flex5: {
      flex: 5,
    },
    noShrink: {
      flexShrink: 0,
    },
    noGrow: {
      flexGrow: 0,
    },
    fullSize: {
      height: '100%',
      width: '100%',
    },
    widthAuto: {
      width: 'auto',
    },
    fullWidth: {
      width: '100%',
    },
    width75: {
      width: '75%',
    },
    width80: {
      width: '80%',
    },
    halfWidth: {
      width: '50%',
    },
    quaterWidth: {
      width: '30%',
    },
    fullHeight: {
      height: '100%',
    },
    halfHeight: {
      height: '50%',
    },
    /* Operation Layout */

    textCenter: {
      textAlign: 'center',
    },
    textJustify: {
      textAlign: 'justify',
    },
    textLeft: {
      textAlign: 'left',
    },
    textRight: {
      textAlign: 'right',
    },
    textCapital: {
      textTransform: 'capitalize',
    },
    textUpper: {
      textTransform: 'uppercase',
    },
    negativeZindex: {
      zIndex: -1,
    },
    positionAbsolute: {
      position: 'absolute',
    },
    positionRelative: {
      position: 'relative',
    },
    overflowHidden: {
      overflow: 'hidden',
    },
    overflowScroll: {
      overflow: 'scroll',
    },
    overflowVisible: {
      overflow: 'visible',
    },
    border: {
      borderWidth: 2,
      borderColor: '#000',
    },
    borderImage: {
      borderWidth: 3.5,
      padding: 2,
      borderColor: Colors.primaryMediumBlue,
    },
    top: {
      top: Spacing.V1,
    },
    right: {
      right: Spacing.H2,
    },
    bottom: {
      bottom: Spacing.V1,
    },
    left: {
      left: Spacing.H2,
    },

    m0: {margin: 0},
    m1: {margin: Spacing.H1},
    m2: {margin: Spacing.H2},
    m3: {margin: Spacing.H3},
    m4: {margin: Spacing.H4},
    m5: {margin: Spacing.H5},
    ml0: {marginLeft: 0},
    ml1: {marginLeft: Spacing.H1},
    ml2: {marginLeft: Spacing.H2},
    ml3: {marginLeft: Spacing.H3},
    ml4: {marginLeft: Spacing.H4},
    ml5: {marginLeft: Spacing.H5},
    ml7: {marginLeft: Spacing.H7},
    mr0: {marginRight: 0},
    mr1: {marginRight: Spacing.H1},
    mr2: {marginRight: Spacing.H2},
    mr3: {marginRight: Spacing.H3},
    mr4: {marginRight: Spacing.H4},
    mr5: {marginRight: Spacing.H5},
    mr7: {marginRight: Spacing.H7},
    mt0: {marginTop: 0},
    mt1: {marginTop: Spacing.V1},
    mt2: {marginTop: Spacing.V2},
    mt3: {marginTop: Spacing.V3},
    mt4: {marginTop: Spacing.V4},
    mt5: {marginTop: Spacing.V5},
    mt10: {marginTop: Spacing.V10},
    mb0: {marginBottom: 0},
    mb1: {marginBottom: Spacing.V1},
    mb2: {marginBottom: Spacing.V2},
    mb3: {marginBottom: Spacing.V3},
    mb4: {marginBottom: Spacing.V4},
    mb5: {marginBottom: Spacing.V5},
    mb6: {marginBottom: Spacing.V6},
    mb7: {marginBottom: Spacing.V7},
    mainPadding: {
      paddingHorizontal: Spacing.H3,
    },
    p0: {padding: 0},
    p1: {padding: Spacing.H1},
    p2: {padding: Spacing.H2},
    p3: {padding: Spacing.H3},
    p4: {padding: Spacing.H4},
    p5: {padding: Spacing.H5},
    pl0: {paddingLeft: 0},
    pl1: {paddingLeft: Spacing.H1},
    pl2: {paddingLeft: Spacing.H2},
    pl3: {paddingLeft: Spacing.H3},
    pl4: {paddingLeft: Spacing.H4},
    pl5: {paddingLeft: Spacing.H5},
    pl7: {paddingLeft: Spacing.H7},
    pr0: {paddingRight: 0},
    pr1: {paddingRight: Spacing.H1},
    pr2: {paddingRight: Spacing.H2},
    pr3: {paddingRight: Spacing.H3},
    pr4: {paddingRight: Spacing.H4},
    pr5: {paddingRight: Spacing.H5},
    pr6: {paddingRight: Spacing.H6},
    pr7: {paddingRight: Spacing.H7},
    pt0: {paddingTop: 0},
    pt1: {paddingTop: Spacing.V1},
    pt2: {paddingTop: Spacing.V2},
    pt3: {paddingTop: Spacing.V3},
    pt4: {paddingTop: Spacing.V4},
    pt5: {paddingTop: Spacing.V5},
    pb0: {paddingBottom: 0},
    pb1: {paddingBottom: Spacing.V1},
    pb2: {paddingBottom: Spacing.V2},
    pb3: {paddingBottom: Spacing.V3},
    pb4: {paddingBottom: Spacing.V4},
    pb5: {paddingBottom: Spacing.V5},
    pb14: {paddingBottom: Spacing.V14},
    //colors
    colorPrimaryDarkGray: {color: Colors.primaryDarkGray},
    colorPrimaryMediumBlue: {color: Colors.primaryMediumBlue},
    colorPrimaryMediumGreen: {color: Colors.primaryMediumGreen},
    colorSecondaryRed: {color: Colors.secondaryRed},
    colorOecondaryOrange: {color: Colors.secondaryOrange},
    colorSecondaryMediumGray: {color: Colors.secondaryMediumGray},
    colorSecondaryLightGray: {color: Colors.secondaryLightGray},
    colorBorderMedGray: {color: Colors.shadowMedGray},
    colorCalendarBorderFirst: {color: Colors.calendarBorderFirst},
    colorCalendarBorderSecond: {color: Colors.calendarBorderSecond},
    colorSecondaryLightBlue: {color: Colors.secondaryLightBlue},
    colorSecondaryLightGreen: {color: Colors.secondaryLightGreen},
    colorWhite: {color: Colors.white},
    colorBlack: {color: '#000000'},
  });
}

const CSS = {
  screenSize: screenSize,
  ...commonUtils(),
  space: {...Spacing},
  DM: handleMargins, //Dynamic margin
  DP: handlePaddings, //Dynamic Padding
  hp: hp,
  wp: wp,
  DH: (height: string | number) => hp(height), //Dynamic Height
  DW: (width: string | number) => wp(width), //Dynamic Width
  //Dynamic Max Min Width, Height
  DMinW: (maxWidth: string | number) => ({maxWidth: wp(maxWidth)}),
  DMaxW: (minWidth: string | number) => ({minWidth: wp(minWidth)}),
  DMinH: (maxHeight: string | number) => ({maxHeight: hp(maxHeight)}),
  DMaxH: (minHeight: string | number) => ({minHeight: hp(minHeight)}),
  zIndex: (zIndex: string | number) => ({zIndex}),
};
export default CSS;
