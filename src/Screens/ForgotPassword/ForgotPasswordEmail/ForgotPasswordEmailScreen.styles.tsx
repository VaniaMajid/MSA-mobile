import {StyleSheet} from 'react-native';
import {useTheme} from '~Contexts/ThemeContext';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignSelf: 'flex-start',
      gap: theme.spacing.HGap1,
      marginBottom: theme.spacing.V5
    },
    text: {
      color: theme.colors.lightGray1, 
      marginTop: theme.spacing.V1
    },
  });
};
