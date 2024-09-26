import {StyleSheet} from 'react-native';
import {useTheme} from '~Contexts/ThemeContext';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
      
      label: {
        marginBottom: theme.spacing.V1,
      },
      dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        borderWidth: 1,
        borderColor: theme.colors.accentColor,
        borderRadius: 6,
        padding: 10,
        height: 60,
        gap: theme.spacing.HGap3,
      },
      dateText: {
        ...theme.fonts.inputFieldSmall
      },
      errorDateContainer: {
        borderColor: theme.colors.error, 
      },
  });
};
