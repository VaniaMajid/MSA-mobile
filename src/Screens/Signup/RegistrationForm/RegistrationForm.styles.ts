import {StyleSheet} from 'react-native';
import {useTheme} from '~Contexts/ThemeContext';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      marginTop: theme.spacing.V1,
      justifyContent: 'center',
      alignSelf: 'flex-start',
    },
  });
};
