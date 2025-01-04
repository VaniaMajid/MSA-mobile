import {StyleSheet} from 'react-native';
import {useTheme} from '~Contexts/ThemeContext'; // Import your theme

export const useStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    container: {
      backgroundColor: theme.colors.backgroundColor,
      alignItems: 'center',
      gap: theme.spacing.V1,
      paddingBottom: theme.spacing.V20,
    },
    itemContainer: {
      borderRadius: theme.spacing.H3,
      width: '90%',
      padding: theme.spacing.H3,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.white,
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: theme.spacing.H2,
      marginRight: 16,
    },
    itemName: {
      maxWidth: '80%',
      color: theme.colors.black,
    },
    itemPrice: {
      color: theme.colors.gray,
      marginVertical: 4,
    },
    quantityContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    quantityButton: {
      width: 32,
      height: 32,
      backgroundColor: theme.colors.white,
      borderWidth: 1,
      borderColor: theme.colors.lightGray,
      borderRadius: theme.spacing.H1,
      marginHorizontal: 8,
    },
    quantityText: {
      color: theme.colors.black,
      textAlign: 'center',
      marginTop: theme.spacing.H1 + 2,
    },
    detailsContainer: {flex: 1, marginLeft: 16},
    variantsText: {color: theme.colors.darkGray , marginTop: 4},
    deleteButton: {
      position: 'absolute',
      right: 0,
      backgroundColor: theme.colors.primaryOrange,
      marginTop: 8,
      padding: 6,
      borderRadius: 8,
    },
    deleteButtonText: {color: theme.colors.black, fontWeight: 'bold'},

    totalContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '90%',
      marginTop: 20,
      padding: theme.spacing.H4,
      backgroundColor: '#f8f8f8',
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#ddd',
      marginBottom: 16,
    },
    totalText: {
      textAlign: 'center',
      color: theme.colors.black,
    },
    checkoutButton: {
      width: '90%',
      backgroundColor: theme.colors.primaryOrange,
      paddingVertical: theme.spacing.V2,
      paddingHorizontal: theme.spacing.H4,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
    },
    checkoutButtonText: {
      color: theme.colors.white,
    },
  });
};
