import {StyleSheet} from 'react-native';
import {useTheme} from '~Contexts/ThemeContext';
import colors from '~Style/Colors';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    scrollContainer: {
      flexGrow: 1,
      backgroundColor: theme.colors.white,
      padding: theme.spacing.H5,
    },
    container: {
      flex: 1,
      gap: theme.spacing.HGap2,
      paddingBottom: theme.spacing.H10,
    },
    editButton: {
      alignSelf: 'flex-end',
      marginRight: theme.spacing.V4,
      marginTop: theme.spacing.V1,
    },
    details: {
      alignItems: 'center',
      position: 'relative',
      paddingTop: theme.spacing.H16,
    },
    image: {
      position: 'absolute',
      height: 160,
      width: 160,
      top: -100,
      borderRadius: 100,
      borderColor: theme.colors.grayBg,
      borderWidth: 1,
      backgroundColor: theme.colors.primaryColor,
    },
    infoContainer: {
      position: 'relative',
      padding: theme.spacing.V3,
      borderColor: theme.colors.grayBg,
      backgroundColor: theme.colors.white,
      borderWidth: 1,
      gap: theme.spacing.HGap1,
      borderRadius: 6,
      shadowColor: 'rgba(0, 0, 0, 0.4)',
      elevation: 5,
      marginTop: theme.spacing.H2,
    },
    valueStyle: {
      ...theme.fonts.filterText,
      color: colors.accentColor,
    },
    paymentButton: {
      width: '40%',
      paddingVertical: 5,
      paddingHorizontal: 5,
      alignSelf: 'flex-end',
    },
    arrow: {
      borderColor: theme.colors.grayBg,
      backgroundColor: theme.colors.white,
      borderWidth: 1,
      padding: theme.spacing.H1,
      shadowColor: 'rgba(0, 0, 0, 0.4)',
      elevation: 5,
      borderRadius: 6,
    }
  });
};
