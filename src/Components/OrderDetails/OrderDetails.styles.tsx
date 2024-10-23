import { StyleSheet } from 'react-native';
import { useTheme } from '~Contexts/ThemeContext';
import { OrderDetails } from './OrderDetails';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      marginTop: theme.spacing.V3,
      padding: theme.spacing.H5,
      backgroundColor: theme.colors.white,
      borderRadius: 10,
    },
    heading: {
      padding: theme.spacing.H1,
      color: theme.colors.black,
    },
    optionsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    option: {
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: theme.spacing.H2,
    },
    optionText: {
      color: theme.colors.darkGray,
      marginTop: theme.spacing.H1,
    },
    optionTextNum: {
      color: theme.colors.gray,
      marginRight: theme.spacing.H4,
    },
    orderDetailsTouchable: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: theme.spacing.H1,
    },
  });
};
