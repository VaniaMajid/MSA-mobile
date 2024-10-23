import {StyleSheet} from 'react-native';
import {useTheme} from '~Contexts/ThemeContext';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative',
      backgroundColor: theme.colors.backgroundColor,
      padding: theme.spacing.H5,
      gap: theme.spacing.HGap2,
    },
    addButton: {
      position: 'absolute',
      width: 60,
      height: 60,
      bottom: 30,
      right: 30,
      backgroundColor: theme.colors.primaryColor,
      borderRadius: 100,
    },
    toolsContainer: {
      backgroundColor: theme.colors.white,
      padding: theme.spacing.H5,
      borderRadius: 10,
      gap: theme.spacing.HGap1,
    },
    toolRows1: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      gap: theme.spacing.V6,
    },
    toolRows2: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      gap: theme.spacing.V6,
    },
    tool2: {
      marginRight: theme.spacing.H4,
    },
    toolItem: {
      alignItems: 'center',
      gap: theme.spacing.H2,
    },
  });
};
