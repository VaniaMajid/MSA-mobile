// input.styles.tsx
import {StyleSheet} from 'react-native';
import {useTheme} from '~Contexts/ThemeContext';

export const useStyles = (variant?: 'default' | 'forms' | 'forms50') => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      justifyContent: 'center',
      ...(variant === 'forms' && {
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.lightGray, // Change color as needed
        borderRadius: 0, // Remove rounded corners for forms variant
      }),
      ...(variant === 'forms50' && {
        width: '45%',
        flexDirection: 'column',
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.lightGray, // Change color as needed
        borderRadius: 0, // Remove rounded corners for forms variant
      }),
    },
    label: {
      marginBottom: theme.spacing.V1,
      ...(variant === 'forms' && {
        marginBottom: 0,
      }),
    },
    inputContainer: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: theme.spacing.HGap3,
      paddingRight: theme.spacing.HGap3,
      gap: theme.spacing.HGap3,
      backgroundColor: theme.colors.white,
      color: theme.colors.darkGray,
      borderRadius: 5,
      borderWidth: 0,
      borderColor: 'transparent',
      height: 50,
      // Add bottom border if variant is 'forms'
      ...(variant === 'forms' && {
        height: 40,
        paddingLeft: 0,
        paddingRight: 0,
        gap: 0,
      }),
    },
    input: {
      flex: 1,
    },
    disabledInputContainer: {
      borderColor: theme.colors.disabled,
    },
    errorInputContainer: {
      borderColor: theme.colors.error,
    },
  });
};
