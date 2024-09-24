import {StyleSheet} from 'react-native';
import {useTheme} from '~Contexts/ThemeContext';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      alignItems: 'center',
      gap: theme.spacing.HGap3,
    },
    containerIcon: {
      borderRadius: 100,
      alignItems: 'center',
      justifyContent: 'center',
    },
    label: {
      ...theme.fonts.inputFieldSmall,
      textAlign: 'center',
    },
    badge: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: theme.colors.error, 
      borderWidth: 1,
      borderColor: 'white',
    },
  });
};
