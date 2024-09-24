import {StyleSheet} from 'react-native';
import {useTheme} from '~Contexts/ThemeContext';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    contentContainer: {
        justifyContent: 'space-between', 
        flex: 1
    },
    label: {
        ...theme.fonts.linkSemiBold,
        marginLeft: -15,
    },
  });
};
