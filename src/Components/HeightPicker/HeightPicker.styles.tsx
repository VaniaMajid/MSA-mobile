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
      padding: 10,
    },
    input: {
      flexDirection: 'row',
      alignItems: 'center',
      maxWidth: 42,
      maxHeight: 40,
    },
    hiddenPicker: {
      display: 'none',
    },
    dropDownContainer: {
      borderColor: theme.colors.accentColor,
      position: 'absolute',
      bottom: 55, 
      width: '100%',
      zIndex: 999, 
    },
  });
};
