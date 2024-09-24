import { StyleSheet } from 'react-native';
import { useTheme } from '~Contexts/ThemeContext';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    wrapper: {
      position: 'relative', 
      width: 40, 
      height: 40,
      marginTop: theme.spacing.H1
    },
    image: {
      width: '100%',
      height: '100%',
      borderRadius: 100,
      backgroundColor: theme.colors.grayBg,
      borderColor: theme.colors.primaryColor,
      borderWidth: 1,
    },
    badge: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: theme.colors.error, 
      borderWidth: 1,
      borderColor: 'white',
    },
  });
};
