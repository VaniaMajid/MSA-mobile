import { StyleSheet } from 'react-native';
import { useTheme } from '~Contexts/ThemeContext';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      alignItems: 'center',
      marginTop: 100,
    },
    superSubHeading: {
      color: theme.colors.darkGray, 
      textAlign: 'center',
      width: '80%',
    },
    heading: {
      color: theme.colors.primaryColor, 
      textAlign: 'center',
      width: '90%',
    },
  });
};
