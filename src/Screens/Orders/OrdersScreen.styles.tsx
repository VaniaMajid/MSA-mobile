import {StyleSheet} from 'react-native';
import {useTheme} from '~Contexts/ThemeContext';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      backgroundColor: theme.colors.backgroundColor,
      padding: theme.spacing.H5,
    },
    orderCard: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: theme.colors.white,
      padding: theme.spacing.V1,
      paddingHorizontal: theme.spacing.H2,
      marginVertical: theme.spacing.V1,
      borderRadius: 10,
    },
    orderInfo: {
      marginBottom: theme.spacing.V1,
    },
    customerName: {
      color: theme.colors.black,
    },
    orderDate: {
      color: theme.colors.gray,
    },
    orderAmount: {
      color: theme.colors.darkGray,
    },
    orderStatus: {
      color: theme.colors.primaryColor,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      position: 'absolute',
      right: 20,
      top: 10,

    },
    hiddenMenu: {
        position: 'absolute',
        width: 150,
        top: 30,
        right: 10,
        backgroundColor: theme.colors.white,
        marginTop: 5,
        borderRadius: 10,
        padding: theme.spacing.H2,
        shadowColor: theme.colors.black,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      menuOption: {
        color: theme.colors.black,
      },
    filterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: theme.spacing.V20, // Add horizontal padding if needed
        paddingVertical: theme.spacing.V1,
    },
    filterButton:{
        backgroundColor: theme.colors.backgroundColor,
        padding: theme.spacing.H2,
        borderRadius: 10,
        width: '40%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    activeFilterButton: {
      backgroundColor: theme.colors.primaryColor,
    },
    filterButtonText: {
      color: theme.colors.black,
    },
    activeFilterButtonText: {
      color: theme.colors.white,
    },
    listContainer: {
      paddingBottom: theme.spacing.V20,
    },
    productImage: {
      width: 100,
      height: 100,
      borderRadius: 10,
      marginTop: theme.spacing.V5,
    },
    orderId: {
      color: theme.colors.gray,
    },
    productNameEn: {
      color: theme.colors.black,
    },
    productNameUr: {
      color: theme.colors.black,
    },
  });
}