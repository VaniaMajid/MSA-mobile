import { StyleSheet } from 'react-native';
import { useTheme } from '~Contexts/ThemeContext';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      width: '100%',
      borderRadius: 15, // Adjust the radius as needed
      overflow: 'hidden', // Ensure the video respects the border radius
    },
    video: {
      width: '100%', // Set to full width
      height: 150, // Adjust height as needed
    },
  });
};
