import {StyleSheet} from 'react-native';
import {useTheme} from '~Contexts/ThemeContext';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
      },
      modalContent: {
        width: 320,
        paddingTop: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: 10,
        gap: theme.spacing.HGap2
      },
      modalText: {
        paddingHorizontal: 20, 
        gap: 3
      },
      header: {
        ...theme.fonts.notificationHeader,
        textAlign: 'center',
      },
      description: {
        ...theme.fonts.previewSubtext,
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        borderTopColor: theme.colors.lightGray,
        borderTopWidth: 1
      },  
      buttonText: {
        ...theme.fonts.popupCTAText,
        textAlign: 'center',
        color: theme.colors.primaryColor,
        padding: 15, 
        width: 150
      },
      divider: {
        width: 1, 
        backgroundColor: theme.colors.lightGray,
      },
  });
};
