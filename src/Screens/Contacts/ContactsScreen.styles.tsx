import { StyleSheet } from 'react-native';
import { useTheme } from '~Contexts/ThemeContext'; // Import your theme

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.backgroundColor, // Background from theme
    },
    chatItem: {
      paddingVertical: 20,
      width: '90%',
      alignSelf: 'center',
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.lightGray, // Divider color
    },
    chatItemContainer: {
      flexDirection: 'row',
      gap: theme.spacing.V1,
      alignItems: 'center',
    },
    chatName: {
      ...theme.fonts.paragraphSmallSemiBold, // Apply your theme's heading font
      color: theme.colors.black,
    },
    chatInfoContainer: {
        flex: 1,
    },
    chatDetails:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    chatLastMessage: {
      ...theme.fonts.paragraphRegularSmall, // Apply theme's smaller font
      color: theme.colors.darkGray,
    },
    chatLastTime: {
      ...theme.fonts.paragraphRegularSmall, // Small timestamp font
      color: theme.colors.gray,
    },
  });
};
