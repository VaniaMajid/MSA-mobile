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
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.colors.darkGray, 
    },
    heading: {
      fontSize: 28,
      fontWeight: 'bold',
      color: theme.colors.primaryColor, 
    },
  });
};
