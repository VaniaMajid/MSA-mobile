import {StyleSheet} from 'react-native';
import { SearchBar } from '~Components/SearchBar';
import {useTheme} from '~Contexts/ThemeContext';

export const useStyles = () => {
  const theme = useTheme(); // Assuming you are using a theme provider

  return StyleSheet.create({
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: theme.spacing.H2,
      backgroundColor: theme.colors.primaryOrange, // Use theme colors
    },
    fullScreenHeader: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: theme.spacing.H2,
      backgroundColor: theme.colors.backgroundColor, // Use theme colors
      height: '100%', // Set the height to 100% of the screen
    },
    searchBar: {
      flex: 1,
      padding: theme.spacing.H2,
    },
    headerTitle: {
      color: theme.colors.primaryColor,
    },
  });
};