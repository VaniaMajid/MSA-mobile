import {StyleSheet} from 'react-native';
import {useTheme} from '~Contexts/ThemeContext';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    tooltipContent: {
        shadowColor: theme.colors.darkGray,
        elevation: 2,
        borderRadius: 6,
        borderColor:  theme.colors.grayBg,
        borderWidth: 1,
        marginTop: 3,
      },
  });
};
