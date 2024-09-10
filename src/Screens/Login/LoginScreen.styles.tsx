import { StyleSheet } from 'react-native';
import { useTheme } from '~Contexts/ThemeContext';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({ 
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 25,
    },
    logo: {
        width: 200, 
        height: 50, 
        marginBottom: 20, 
        objectFit: 'contain'
      },
    form: {
      width: '100%',
      gap: 20,
    },
    register: {
      width: '100%', 
      alignItems: 'center', 
      gap: 10, 
      marginTop: 60,
    },
    text: {
      textAlign: 'center',
      fontSize: 16,
      color: theme.colors.darkGray,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      minHeight: 30, 
    },
    forgotPass: {
      fontSize: 16,
      fontWeight: '700',
      color: theme.colors.primaryColor, 
    },
    checkboxIcon: {
      borderColor: theme.colors.primaryColor,
      borderRadius: 5,
    },
    checkboxInnerIcon: {
      borderWidth: 1,
      borderRadius: 5,
    },
    checkboxText: {
      fontSize: 16,
      color: theme.colors.darkGray,
      textDecorationLine: 'none',
    },
  });
};
