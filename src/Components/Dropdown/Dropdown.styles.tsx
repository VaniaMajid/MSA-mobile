import {StyleSheet} from 'react-native';
import {useTheme} from '~Contexts/ThemeContext';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    dropdownContainer: {
      borderColor: theme.colors.accentColor,
      padding: theme.spacing.H2,
      zIndex: 999,
    },
    searchTextInput: {
      borderColor: theme.colors.accentColor,
      borderRadius: 6,
      color: theme.colors.darkGray,
      height: 50,
    },
    listItemContainer: {
      marginBottom: theme.spacing.H1,
    },
  });
};
