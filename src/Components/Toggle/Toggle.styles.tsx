import {StyleSheet} from 'react-native';
import {useTheme} from '~Contexts/ThemeContext';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    track: {
        alignItems: 'flex-start',
        width: 100,
        height: 40,
        padding: 5,
      },
      thumb: {
        marginTop: '-30%',
        marginLeft: '-25%',
        width: 16,
        height: 16,
        backgroundColor: theme.colors.white,
      },
  });
};
