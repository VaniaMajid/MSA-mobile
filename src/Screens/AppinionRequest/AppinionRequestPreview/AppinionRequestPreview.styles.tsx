import {StyleSheet} from 'react-native';
import {useTheme} from '~Contexts/ThemeContext';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    main: {
      flex: 1,
      backgroundColor: theme.colors.white,
      padding: theme.spacing.H4,
      gap: theme.spacing.HGap2,
    },
    scrollContainer: {
      flexGrow: 1,
    },
    container: {
      marginTop: theme.spacing.V1,
      paddingHorizontal: theme.spacing.H1,
      marginBottom: theme.spacing.H4,
      justifyContent: 'center',
      alignSelf: 'center',
      gap: theme.spacing.HGap2,
    },
    question: {
      gap: 4,
    },
    buttons: {
      gap: theme.spacing.V4,
      justifyContent: 'center',
      flexDirection: 'row',
    },
    attachments: {
      flexDirection: 'row',
      gap: theme.spacing.HGap2,
    },
    attachmentImage: {
      width: 170,
      height: 150,
      borderRadius: 6,
    },
    docAttachment: {
      width: 170,
      height: 150,
      borderRadius: 6,
      borderColor: theme.colors.accentColor,
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      gap: theme.spacing.HGap3,
    },
  });
};
