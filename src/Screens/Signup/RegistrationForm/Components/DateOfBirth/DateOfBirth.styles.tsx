import {StyleSheet} from 'react-native';
import {useTheme} from '~Contexts/ThemeContext';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    label: {
        flexDirection: 'row', 
        alignItems: 'center', 
        marginBottom: 10,
        gap: theme.spacing.HGap3
    },
    inputRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    input: {
      width: 107,
      height: 48,
      flexShrink: 0,
      borderWidth: 1,
      borderColor: theme.colors.accentColor,
      borderRadius: 6,
      textAlign: 'center',
      color: theme.colors.darkGray,
    },
    activeInput: {
      borderColor: theme.colors.primaryColor,
      borderWidth: 2,
    },
    yearInput: {
      width: 100,
    },
    errorInputContainer: {
      borderColor: theme.colors.error, 
    },
  });
};
