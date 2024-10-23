import { StyleSheet } from 'react-native';
import { useTheme } from '~Contexts/ThemeContext';

export const useStyles = (
  backgroundColor?: string,
  mainHeadingColor?: string,
  subHeadingColor?: string
) => {
  const theme = useTheme();

  return StyleSheet.create({
    cardContainer: {
      width: '45%',
      borderRadius: 10,
      paddingTop: theme.spacing.V4,
      paddingLeft: theme.spacing.V2,
      paddingBottom: theme.spacing.V2,
      position: 'relative', // For the icon positioning
      backgroundColor: backgroundColor || theme.colors.primaryColor, // Use the backgroundColor prop or fallback to default
    },
    iconContainer: {
      position: 'absolute',
      top: 8,
      right: 8,
    },
    content: {
      padding: theme.spacing.H1,
    },
    mainHeading: {
      marginBottom: theme.spacing.H1,
      color: mainHeadingColor || theme.colors.white, // Use mainHeadingColor or fallback to white
    },
    subHeading: {
      color: subHeadingColor || theme.colors.white, // Use subHeadingColor or fallback to white
    },
  });
};
