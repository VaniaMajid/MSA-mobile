import { StyleSheet } from 'react-native';
import { useTheme } from '~Contexts/ThemeContext';

export const useStyles = (variant: 'outline' | 'filled') => {
  const theme = useTheme();

  return StyleSheet.create({
    button: {
      backgroundColor: variant === 'filled' ? theme.colors.primaryColor : theme.colors.white,
      paddingVertical: 15,
      paddingHorizontal: 20,
      borderRadius: 6,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: variant === 'outline' ? 1 : 0,
      borderColor: variant === 'outline' ? theme.colors.primaryColor : 'transparent',
    },
    text: {
      color: variant === 'filled' ? theme.colors.white : theme.colors.primaryColor,
      fontSize: 16,
      fontWeight: '500',
    },
  });
};
