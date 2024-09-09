import {StyleSheet} from 'react-native';
import {useTheme} from '~Contexts/ThemeContext';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    label: {
      marginBottom: theme.spacing.V5,
      fontSize: 16,
      color: theme.colors.accentColor,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: theme.colors.accentColor,
      borderRadius: 5,
      padding: 10,
    },
    input: {
      flex: 1,
      marginLeft: 10,
      fontSize: 16,
      color: theme.colors.black,
    },
  });
};
