import { StyleSheet } from 'react-native';
import { useTheme } from '~Contexts/ThemeContext'; // Import your theme

export const useStyles = () => {
  const theme = useTheme(); // Access theme for colors, fonts, etc.

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.backgroundColor, // Using theme background color
    },
    inputToolbar: {
      backgroundColor: theme.colors.backgroundColor, // Input toolbar background from theme
      // paddingVertical: theme.spacing.V1,
      paddingHorizontal: theme.spacing.H4,
    },
    input: {
      backgroundColor: theme.colors.white, // Input field background from theme
      borderRadius: 10,
      padding: 8,
      color: theme.colors.black, // Theme text color
    },
    sendButton: {
      borderRadius: 10,
      backgroundColor: theme.colors.primaryOrange, // Send button background color
      padding: theme.spacing.V1,
      width: 50,
      height: 35,  
    },
    sendButtonText:{
      color: theme.colors.white, // Send button text color
    },
  });
};
