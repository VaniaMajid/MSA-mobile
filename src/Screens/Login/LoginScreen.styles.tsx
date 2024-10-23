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
    registerButton: {
      color: theme.colors.secondaryColor,
    },
    bottomText:{
      color: theme.colors.darkGray,
      textAlign: 'center',
      marginTop: 20,
    },
    logo: {
        width: 200, 
        height: 50, 
        marginBottom: 20, 
        objectFit: 'contain'
      },
    form: {
      width: '100%',
      gap: 15,
    },
    register: {
      width: '100%', 
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 10, 
      gap: 10, 
      marginTop: 60,
      flexDirection: 'row',
    },   
    text: {
      textAlign: 'center',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      minHeight: 30, 
    },
    forgotPass: {
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
    bg: {
      backgroundColor: theme.colors.backgroundColor,
      justifyContent: 'flex-end', // Align children to the bottom
      alignItems: 'center', // Center children horizontally
      padding: 20,
      position: 'absolute', // Positioning it absolutely
      bottom: 0, // Align it to the bottom of the parent
      left: 10, // Align it to the left
      right: 10, // Align it to the right
      borderTopLeftRadius: 44, // Adjust as needed for your design
      borderTopRightRadius: 44, // Adjust as needed for your design
    },

    
  });
};
