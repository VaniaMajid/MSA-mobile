import {StyleSheet} from 'react-native';
import {useTheme} from '~Contexts/ThemeContext';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: theme.colors.white,
      paddingVertical: theme.spacing.H5,
      paddingHorizontal: theme.spacing.H6,
      gap: theme.spacing.HGap2,
    },
    label: {
      ...theme.fonts.notificationSubtext,
      color: theme.colors.lightGray1,
    },
  });
};
