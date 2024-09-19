import {StyleSheet} from 'react-native';
import {useTheme} from '~Contexts/ThemeContext';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    scrollContainer: {
      flex: 1,
    },
    container: {
      flex: 1,
      width: '100%',
      marginTop: theme.spacing.V1,
      marginBottom: theme.spacing.V1,
      justifyContent: 'center',
      alignSelf: 'flex-start',
      gap: 10,
    },
    bmiContainer: {
      flex: 1,
    },
    bmi: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: theme.colors.accentColor,
      borderRadius: 6,
      padding: 10,
      gap: theme.spacing.HGap3,
      height: 60,
    },
    errorBmi: {
      borderColor: theme.colors.error,
    },
    toggle: {
      marginTop: theme.spacing.V1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    allergyToggle: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    label: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
      gap: theme.spacing.HGap3,
    },
    toggleText: {
      marginRight: theme.spacing.H2,
    },
    submitButton: {
      marginTop: theme.spacing.V2,
      width: '100%',
    },
  });
};
