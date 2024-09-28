import {StyleSheet} from 'react-native';
import {useTheme} from '~Contexts/ThemeContext';

export const useStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    text: {
      ...theme.fonts.inputFieldSmall,
      color: theme.colors.error,
      backgroundColor: '#F0346226',
      paddingVertical: 7,
      paddingHorizontal: theme.spacing.H3,
      borderRadius: 6,
      textAlign: 'center'
    },
  });
};
