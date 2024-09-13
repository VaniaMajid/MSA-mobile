import {StyleSheet} from 'react-native';
import {useTheme} from '~Contexts/ThemeContext';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderWidth: 1,
      borderColor: theme.colors.accentColor,
      borderRadius: 6,
      paddingHorizontal: 10,
      height: 60,
    },
    input: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 1,
        maxWidth: 42,
    },
    dropdownButton: {
      paddingHorizontal: 5,
    },
    hiddenPicker: {
      display: 'none',
    },
    dropDownContainer: {
      borderColor: theme.colors.accentColor,
      position: 'absolute',
      width: '100%',
    },
  });
};
