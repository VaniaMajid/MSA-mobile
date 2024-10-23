import {StyleSheet} from 'react-native';
import {useTheme} from '~Contexts/ThemeContext';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      backgroundColor: theme.colors.backgroundColor,
      width: '100%',
      height: '70%',
      justifyContent: 'flex-start',
      paddingTop: 30,
      paddingHorizontal: 20,
      alignItems: 'center',
      gap: theme.spacing.HGap1,
      borderTopLeftRadius: 44, // Adjust as needed for your design
      borderTopRightRadius: 44, // Adjust as needed for your design
    },
    text: {
      color: theme.colors.lightGray1, 
      marginTop: theme.spacing.V1
    },
  });
};
