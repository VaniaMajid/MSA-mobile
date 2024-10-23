import { set } from 'react-hook-form';
import {StyleSheet} from 'react-native';
import {useTheme} from '~Contexts/ThemeContext';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.backgroundColor,
      padding: theme.spacing.H5,
    },
    profileContainer: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginBottom: theme.spacing.V2,
      
    },
    profileImage: {
      width: 80,
      height: 80,
      backgroundColor: theme.colors.white,
      borderRadius: 100,
      marginRight: theme.spacing.H3,
    },
    profileInfo: {
      flexDirection: 'column',
      marginTop: theme.spacing.V1,
    },
    subProfileInfo:{
      flexDirection: 'row',
      gap: theme.spacing.H2,
    },
    userName: {
      color: theme.colors.black,
    },
    subText: {
      color: theme.colors.gray,
    },
    notificationContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: theme.spacing.V2,
      backgroundColor: theme.colors.primaryColor,
      borderRadius: 10,
    },
    orderTitle: {
      color: theme.colors.white,
    },
    notificationText: {
      flex: 1,
      marginLeft: theme.spacing.H2,
      color: theme.colors.white,
    },
    notificationDate: {
      color: theme.colors.offWhite,
    },
    notificationInfo: {
      flexDirection: 'row',
      gap: theme.spacing.H2,
      justifyContent: 'space-between',
      color: theme.colors.white,
    },
    notificationInfoText: {
      color: theme.colors.white,
      width: 250,
    },
    notificationDetails: {
      width: '100%',
      padding: theme.spacing.V1,
      gap: theme.spacing.V1,
      backgroundColor: theme.colors.primaryLight,
      borderRadius: 10,
    },
    notificationDetailsHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    setupContainer: {
      marginTop: theme.spacing.V3,
      padding: theme.spacing.V2,
      backgroundColor: theme.colors.tertiaryColor,
      borderRadius: 10,
    },
    setupItemHeader: {
      flexDirection: 'row',
      gap: theme.spacing.H2,
    },
    setupItem: {
      gap: theme.spacing.H2,
      padding: theme.spacing.H2,
      backgroundColor: theme.colors.tertiaryLight,
      marginBottom: theme.spacing.V1,
      borderRadius: 10,
    },
    setupItemText: {
      color: theme.colors.white,
      marginTop: theme.spacing.H1,
    },
    setupTextNumberContainer: {
      width: 30,
      height: 30,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth:1,
      borderRadius: 50,
      borderColor: theme.colors.white,
    },
    orderDetailsContainer: {
      marginTop: 0,
    },
    sectionHeading: {
      fontWeight: 'bold',
      padding: theme.spacing.V1,
      marginBottom: theme.spacing.V2,
      color: theme.colors.white,
    },
    expandedView: {
      marginTop: 8,
      padding: 10,
      gap: theme.spacing.V1,
      alignItems: 'center',
    },
    expandedText: {
      marginBottom: 8,
      color: theme.colors.white,
    },
    addButton: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: theme.spacing.V1,
      paddingHorizontal: theme.spacing.H2,
      backgroundColor: theme.colors.tertiaryColor,
      borderRadius: 10,
    },
    addButtonText: {
      color: theme.colors.white,
    },
    graphSection: {
      marginTop: theme.spacing.V3,
      padding: theme.spacing.V1,
      width: '100%',
    },
    graphSectionHeader: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: theme.spacing.V2,
    },
    graphSectionHeading: {
      color: theme.colors.gray,
      textAlign: 'center',
    },
    graphSectionSubText: {
      color: theme.colors.black,
      textAlign: 'center',
    },
  });
};
