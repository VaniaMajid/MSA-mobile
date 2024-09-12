import {StyleSheet} from 'react-native';
import {useTheme} from '~Contexts/ThemeContext';

export const useStyles = (fontSize: number, color: string) => {
  const theme = useTheme();
  return StyleSheet.create({
    text: {
      color: color,
    },
  });
};
