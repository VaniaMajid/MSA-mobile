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
      paddingHorizontal: theme.spacing.H1,
      justifyContent: 'center',
      alignSelf: 'center',
      gap: 5,
    },
    infoContainer: {
        marginVertical: theme.spacing.V1,
        gap: 22,
    },
    buttons: {
        gap: theme.spacing.V4,
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: theme.spacing.V10,
    }
  });
};
