import {StyleSheet} from 'react-native';
import {useTheme} from '~Contexts/ThemeContext';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.white,
      borderRadius: theme.spacing.H2,
      paddingHorizontal: theme.spacing.H4,
      marginVertical: theme.spacing.V2,
      height: theme.spacing.H12,
    },
    input: {
      flex: 1,
      color: theme.colors.black,
      paddingVertical: theme.spacing.V1,
      paddingHorizontal: theme.spacing.H2,
    },
    placeholderColor: {
      color: theme.colors.gray,
    },
  });
};
