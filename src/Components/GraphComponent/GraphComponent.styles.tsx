import {StyleSheet} from 'react-native';
import {useTheme} from '~Contexts/ThemeContext';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      marginTop: theme.spacing.V1,
      padding: 10,
    },
    pointerLabelContainer: {
      marginTop: 40,
      height: 50,
      width: 50,
      backgroundColor: theme.colors.black,
      borderRadius: 6,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      marginLeft: -13,
      position: 'relative',
    },
    triangle: {
        position: 'absolute',
        bottom: -8, // Adjust this value to position the triangle above the container
        left: '77%', // Center the triangle horizontally
        marginLeft: -7, // Adjust to center the triangle point
        width: 0,
        height: 0,
        borderLeftWidth: 7, // Half of the width of the triangle
        borderRightWidth: 7, // Half of the width of the triangle
        borderTopWidth: 10, // Change this to create the upward-pointing triangle
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: theme.colors.black, // Same color as the container
      },
    pointerLabelText: {
      color: theme.colors.white,
    },
  });
};
