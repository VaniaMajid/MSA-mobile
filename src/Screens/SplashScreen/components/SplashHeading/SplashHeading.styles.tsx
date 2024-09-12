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
    },
    heading: {
      color: theme.colors.primaryColor, 
    },
  });
};
