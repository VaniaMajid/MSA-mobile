import { StyleSheet } from 'react-native';
import { useTheme } from '~Contexts/ThemeContext';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      alignItems: 'center',
      marginVertical: 16,
    },
    superSubHeading: {
      fontSize: 16,
      fontWeight: 'bold',
      color: theme.colors.darkGray, 
    },
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      color: theme.colors.primaryColor, 
      marginVertical: 8,
    },
  });
};
