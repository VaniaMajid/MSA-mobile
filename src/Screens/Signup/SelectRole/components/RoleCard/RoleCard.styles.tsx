import {StyleSheet} from 'react-native';
import {useTheme} from '~Contexts/ThemeContext';

export const useStyles = (selectedIcon: boolean) => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      backgroundColor: !selectedIcon ? undefined : theme.colors.primaryColor,
      marginVertical: theme.spacing.V3,
      marginHorizontal: theme.spacing.H2,
      paddingHorizontal: theme.spacing.H2,
      borderRadius: 6,
      alignItems: 'center',
    },
    icon: {
      position: 'absolute',
      backgroundColor: theme.colors.primaryColor,
      borderRadius: 6,
      opacity: 0.1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    selectedIcon: {
      position: 'absolute',
      right: 10,
      top: 10,
    },
    roleIcon: {
      flexDirection: 'row',
      margin: theme.spacing.V3,
      height: 50,
    },
    roleText: {
      color: !selectedIcon ? theme.colors.black : theme.colors.white,
      marginVertical: theme.spacing.V1,
      alignSelf: 'center',
    },
  });
};
