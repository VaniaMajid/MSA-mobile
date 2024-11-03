import {set} from 'react-hook-form';
import {StyleSheet} from 'react-native';
import {useTheme} from '~Contexts/ThemeContext';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.backgroundColor,
      padding: theme.spacing.H5,
      marginTop: theme.spacing.V5,
    },
    trackCardContainer: {
      flexDirection: 'row',
      gap: theme.spacing.H5,
    },
    button: {
      width: '100%',
      backgroundColor: theme.colors.primaryOrange,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: theme.spacing.H5,
      paddingVertical: theme.spacing.V2,
    },
    graphSection: {
      marginTop: theme.spacing.V3,
      padding: theme.spacing.V1,
      width: '100%',
    },
    graphSectionHeader: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: theme.spacing.V2,
    },
    graphSectionHeading: {
      color: theme.colors.gray,
      textAlign: 'center',
    },
    graphSectionSubText: {
      color: theme.colors.black,
      textAlign: 'center',
    },
  });
};
