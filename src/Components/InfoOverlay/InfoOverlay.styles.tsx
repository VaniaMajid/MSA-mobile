import {StyleSheet} from 'react-native';
import {useTheme} from '~Contexts/ThemeContext';

export const useStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    overlay: {
        position: 'absolute',
        top: 20,
        left: -4,
        justifyContent: 'center',
        backgroundColor: theme.colors.white,
        borderColor:  theme.colors.grayBg,
        borderWidth: 1,
        margin: 5,
        borderRadius: 8,
        elevation: 2,
        zIndex: 1,
        padding: 10, 
        height: 'auto',
        width: '95%',
      },
      info: {
        ...theme.fonts.paragraphRegularSmall,
      },
  });
};
