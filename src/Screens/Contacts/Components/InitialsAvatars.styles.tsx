// InitialsAvatar.styles.ts
import { useTheme } from '~Contexts/ThemeContext'; // Adjust the import according to your project structure
import { StyleSheet } from 'react-native';

export const useStyles = () => {
  const theme = useTheme(); // Access your theme

  return StyleSheet.create({
    avatar: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    initials: {
      color: theme.colors.white, // Use theme color for text
    },
  });
};
