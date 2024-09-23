import {StyleSheet} from 'react-native';
import {useTheme} from '~Contexts/ThemeContext';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: theme.spacing.H6,
      height: 70,
      backgroundColor: theme.colors.white,
      shadowColor: theme.colors.darkGray,
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.1,
      shadowRadius: 4,

      elevation: 5,
    },
    headerTitle: {
      ...theme.fonts.uiLabelSemiBold,
    },
    notificationIcon: {
      marginRight: theme.spacing.H2,
    },
  });
};
