import {StyleSheet} from 'react-native';
import {useTheme} from '~Contexts/ThemeContext';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    button: {
      backgroundColor: theme.colors.primaryColor,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: theme.colors.white,
      fontSize: 16,
      fontWeight: '500',
    },
  });
};
