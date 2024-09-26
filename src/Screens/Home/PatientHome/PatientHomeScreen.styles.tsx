import {StyleSheet} from 'react-native';
import {useTheme} from '~Contexts/ThemeContext';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.white,
      padding: theme.spacing.H5,
      gap: theme.spacing.HGap2,
    },
    specialityContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      gap: 28,
    },
    speciality: {
      width: '28%',
      marginBottom: theme.spacing.V1,
    },   
  });
};
