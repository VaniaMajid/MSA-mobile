import {StyleSheet} from 'react-native';
import {useTheme} from '~Contexts/ThemeContext';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      gap: theme.spacing.HGap2,
    },
    stepContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: theme.spacing.HGap3,
    },
    stepTextContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    pressableText: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: theme.spacing.HGap3,
    },
    text: {
      ...theme.fonts.filterText, 
      color: theme.colors.accentColor
    },
    line: {
      borderRadius: 6,
      height: 7,
      width: '31%',
      marginTop: theme.spacing.V1,
    },
  });
};
