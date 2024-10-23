import { StyleSheet } from 'react-native';
import { useTheme } from '~Contexts/ThemeContext'; // Import your theme

export const useStyles = () => {
  const theme = useTheme(); // Access theme for colors, fonts, etc.

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.backgroundColor, // Using theme background color
    },
    bubbleContainer: {
      padding: 8,
      borderRadius: 10,
    },
    bubbleLeft: {
      backgroundColor: theme.colors.primaryOrange, // Bubble color for received messages
      color: theme.colors.white, // Text color for received messages
      borderRadius: 10,
    },
    bubbleRight: {
      backgroundColor: theme.colors.primaryColor, // Bubble color for sent messages
      borderRadius: 10,
    },
    inputToolbar: {
      backgroundColor: theme.colors.backgroundColor, // Input toolbar background from theme
      paddingVertical: theme.spacing.V1,
      paddingHorizontal: theme.spacing.H4,
    },
    input: {
      backgroundColor: theme.colors.white, // Input field background from theme
      borderRadius: 10,
      padding: 8,
      color: theme.colors.black, // Theme text color
    },
    micButton: {
      padding: 10,
      alignItems: 'center',
    },
    recordingText: {
      color: 'red',
      fontSize: 12,
    },
  });
};
