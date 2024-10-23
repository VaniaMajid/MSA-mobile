import {set} from 'react-hook-form';
import {StyleSheet} from 'react-native';
import {useTheme} from '~Contexts/ThemeContext';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.backgroundColor,
      padding: theme.spacing.H5,
    },
    trackCardContainer: {
      flexDirection: 'row',
      gap: theme.spacing.H5,
      marginVertical: theme.spacing.V1,
    },
    salesText: {
      alignSelf: 'flex-start',
      padding: theme.spacing.H2,
      color: theme.colors.black,
    },
  });
};
