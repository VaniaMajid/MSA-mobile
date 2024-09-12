import {StyleSheet} from 'react-native';
import {useTheme} from '~Contexts/ThemeContext';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    scrollContainer: {
      flex: 1,
      paddingBottom: '-20%',
    },
    container: {
      flex: 1,
      width: '100%',
      marginTop: theme.spacing.V1,
      justifyContent: 'center',
      alignSelf: 'flex-start',
      gap: 10,
    },
    toggle: {
      marginTop: theme.spacing.V2,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });
};
