import {StyleSheet} from 'react-native';
import {useTheme} from '~Contexts/ThemeContext';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignSelf: 'flex-start',
      marginBottom: theme.spacing.V5
    },
    text: {
      color: theme.colors.lightGray1, 
      marginTop: theme.spacing.V1
    },
    roleCardContainer: {
      flexDirection: 'row', 
      marginLeft: -theme.spacing.H3
    },
    checkboxText: {
      marginLeft: theme.spacing.H2
    },
    checkboxTextPrimary: {
      color: theme.colors.primaryColor
    },
  });
};
