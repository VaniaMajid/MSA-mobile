import {StyleSheet} from 'react-native';
import {useTheme} from '~Contexts/ThemeContext';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      marginTop: theme.spacing.V5,
      justifyContent: 'center',
      alignSelf: 'flex-start',
    },
  });
};
