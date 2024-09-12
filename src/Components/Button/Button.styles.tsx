import {StyleSheet} from 'react-native';
import {useTheme} from '~Contexts/ThemeContext';

export const useStyles = (variant: 'outline' | 'filled') => {
  const theme = useTheme();

  const styles = {
    outline: {
      button: {
        backgroundColor: theme.colors.white,
        borderWidth: 1,
        borderColor: theme.colors.primaryColor,
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
      },
      text: {
        color: theme.colors.primaryColor,
      },
    },
    filled: {
      button: {
        backgroundColor: theme.colors.primaryColor,
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0,
      },
      text: {
        color: theme.colors.white,
      },
    },
  };

  switch (variant) {
    case 'outline':
      return StyleSheet.create(
        styles.outline as Record<'button' | 'text', any>,
      );
    case 'filled':
      return StyleSheet.create(styles.filled as Record<'button' | 'text', any>);
    default:
      return StyleSheet.create(styles.filled as Record<'button' | 'text', any>);
  }
};
