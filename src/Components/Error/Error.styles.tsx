import {StyleSheet} from 'react-native';
import {useTheme} from '~Contexts/ThemeContext';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    errorText: {
      marginTop: 4,
      color: theme.colors.error,
    },
  });
};
