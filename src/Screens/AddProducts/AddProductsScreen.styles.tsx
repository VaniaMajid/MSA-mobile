import {StyleSheet} from 'react-native';
import {useTheme} from '~Contexts/ThemeContext';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.backgroundColor,
      padding: theme.spacing.H5,
      gap: theme.spacing.H5,
      
    },
    headings:{
      color: theme.colors.secondaryOrange,
    },
    fieldContainer:{
      backgroundColor: theme.colors.white,
      padding: theme.spacing.H5,
      borderRadius: 10,
      gap: theme.spacing.H3,
    },
    compactFieldContainer:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: theme.spacing.V2,
      // backgroundColor: theme.colors.black,
    },
    inputContainer:{
      borderBottomWidth: 1,
    },
    scrollContainer: {
      flexGrow: 1,
      gap: theme.spacing.HGap1,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  });
};
