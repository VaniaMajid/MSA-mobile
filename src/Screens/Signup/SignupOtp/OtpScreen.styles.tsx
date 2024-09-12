import {StyleSheet} from 'react-native';
import {useTheme} from '~Contexts/ThemeContext';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:  theme.spacing.V5,
        gap: theme.spacing.HGap3
    },
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    buttons: {
        gap: theme.spacing.HGap1,
        justifyContent: 'flex-end',
        paddingTop:  theme.spacing.V10,
    }
  });
};
