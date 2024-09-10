import {StyleSheet} from 'react-native';
import {useTheme} from '~Contexts/ThemeContext';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      justifyContent: 'center',
    },
    label: {
      marginBottom: theme.spacing.V1,
      fontSize: 18,
      fontWeight:'semibold',
      color: theme.colors.darkGray,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: theme.colors.accentColor,
      borderRadius: 6,
      padding: 10,
    },
    input: {
      flex: 1,
      fontSize: 14,
      color: theme.colors.darkGray,
    },
  });
};
