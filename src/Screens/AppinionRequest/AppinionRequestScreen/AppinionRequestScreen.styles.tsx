import {StyleSheet} from 'react-native';
import {useTheme} from '~Contexts/ThemeContext';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.white,
      paddingVertical: theme.spacing.H5,
      paddingHorizontal: theme.spacing.H6,
      gap: theme.spacing.HGap2,
    },
    scrollContainer: {
      flexGrow: 1,
    },
    formContainer: {
      flex: 1,
      width: '100%',
      marginTop: theme.spacing.V1,
      marginBottom: theme.spacing.V1,
      justifyContent: 'center',
      alignSelf: 'flex-start',
      gap: theme.spacing.HGap1,
    },
    attachmentImage: {
      width: 110,
      height: 110,
      borderRadius: 6,
    },
    docAttachment: {
      width: 110,
      height: 110,
      borderRadius: 6,
      borderColor: theme.colors.accentColor,
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      gap: theme.spacing.HGap3,
    },
    addButton: {
      width: 100,
      height: 100,
      backgroundColor: theme.colors.grayBg,
      borderRadius: 100,
    },
    removeButton: {
      paddingVertical: theme.spacing.V1,
      paddingHorizontal: theme.spacing.H1,
    },
    addButtonContainer: {
        gap: theme.spacing.HGap3,
        alignItems: 'center',
        marginRight: theme.spacing.H3,
        marginTop: theme.spacing.V1,
        marginBottom: theme.spacing.V4
      },
      link: {
        ...theme.fonts.linkBold,
        textAlign: 'center',
        color: theme.colors.primaryColor,
        textDecorationLine: 'underline',
        marginTop: theme.spacing.V2,
      },
      iconStyle: {
        borderRadius: 20
      },
      radioButtons: {
        flexDirection: 'row',
        gap: theme.spacing.HGap1,
      }

  });
};
