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
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: theme.colors.accentColor,
      borderRadius: 6,
      padding: 10,
      gap: theme.spacing.HGap3,
    },
    input: {
      flex: 1,
    },
    disabledInputContainer: { 
      borderColor: theme.colors.disabled, 
    },
    errorInputContainer: {
      borderColor: theme.colors.error, 
    },
  });
};
