import {StyleSheet} from 'react-native';
import {useTheme} from '~Contexts/ThemeContext';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    notificationContainer: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: 12,
    },
    notificationTextContainer: {
      flex: 1, 
      gap: 5
    },
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    time: {
      ...theme.fonts.subtextSmall,
      color: theme.colors.lightGray1
    },
    notificationSubtext: {
      ...theme.fonts.previewSubtext
    },
  });
};
