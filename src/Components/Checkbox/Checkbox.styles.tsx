import {StyleSheet} from 'react-native';
import {useTheme} from '~Contexts/ThemeContext';

export const useStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    checkboxIcon: {
        borderColor: theme.colors.primaryColor,
        borderRadius: 5,
      },
      checkboxInnerIcon: {
        borderWidth: 0,
        borderRadius: 5,
      },
      checkboxText: {
        textDecorationLine: 'none',
      },
  });
};
