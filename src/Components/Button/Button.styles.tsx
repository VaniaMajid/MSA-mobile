import { StyleSheet } from 'react-native';
import { useTheme } from '~Contexts/ThemeContext';

export const useStyles = (
  variant: 'outline' | 'filled' | 'outline2' | 'pear',
  disabled: boolean
) => {
  const theme = useTheme();

  const baseStyles = {
    icon: {
      marginHorizontal: 5, // Adjust the spacing between icons and text
    },
    button: {
      paddingVertical: 1,
      paddingHorizontal: 25,
      borderRadius: 8,
      alignItems: 'center',
      flexDirection: 'row', // Ensure icons and text align horizontally
    },
  };

  const styles = {
    outline: {
      ...baseStyles,
      button: {
        backgroundColor: theme.colors.white,
        borderWidth: 1,
        borderColor: disabled ? theme.colors.secondaryColor : theme.colors.transparent,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'space-between', // Space between when both icons are present
        flexDirection: 'row',
      },
      text: {
        color: disabled ? theme.colors.primaryColor : theme.colors.secondaryColor,
      },
      leftIcon: baseStyles.icon,
      rightIcon: baseStyles.icon,
    },
    filled: {
      ...baseStyles,
      button: {
        backgroundColor: disabled ? theme.colors.secondaryColor : theme.colors.primaryColor,
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center', // Center for filled buttons
        borderWidth: 0,
      },
      text: {
        color: theme.colors.white,
      },
      leftIcon: baseStyles.icon,
      rightIcon: baseStyles.icon,
    },
    // New outline2 variant with centered content
    outline2: {
      ...baseStyles,
      button: {
        backgroundColor: theme.colors.white,
        borderWidth: 1,
        borderColor: disabled ? theme.colors.secondaryColor : theme.colors.transparent,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center', // Center content for outline2
        flexDirection: 'row',
      },
      text: {
        color: disabled ? theme.colors.primaryColor : theme.colors.secondaryColor,
      },
      leftIcon: baseStyles.icon,
      rightIcon: baseStyles.icon,
    },
    pear: {
      ...baseStyles,
      button: {
        backgroundColor: theme.colors.primaryOrange,
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center', // Center for filled buttons
        borderWidth: 0,
      },
      text: {
        color: theme.colors.white,
      },
      leftIcon: baseStyles.icon,
      rightIcon: baseStyles.icon,
    },
  };

  switch (variant) {
    case 'outline':
      return StyleSheet.create(styles.outline as Record<'button' | 'text' | 'leftIcon' | 'rightIcon', any>);
    case 'filled':
      return StyleSheet.create(styles.filled as Record<'button' | 'text' | 'leftIcon' | 'rightIcon', any>);
    case 'outline2':
      return StyleSheet.create(styles.outline2 as Record<'button' | 'text' | 'leftIcon' | 'rightIcon', any>);
    case 'pear':
      return StyleSheet.create(styles.pear as Record<'button' | 'text' | 'leftIcon' | 'rightIcon', any>);
    default:
      return StyleSheet.create(styles.filled as Record<'button' | 'text' | 'leftIcon' | 'rightIcon', any>);
  }
};
