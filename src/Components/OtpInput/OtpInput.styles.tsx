import {StyleSheet} from 'react-native';
import {useTheme} from '~Contexts/ThemeContext';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: theme.spacing.H3,
      },
      input: {
        width: 45,
        height: 45,
        borderWidth: 1,
        borderColor: theme.colors.accentColor,
        borderRadius: 5,
        textAlign: 'center',
        fontSize: 18,
        marginHorizontal: 5,
      },
      inputFocused: {
        borderColor: theme.colors.primaryColor, 
        borderWidth: 2,
      },
  });
};
