import { StyleSheet, Dimensions } from 'react-native';
import { useTheme } from '~Contexts/ThemeContext';


export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    

    modalContainer: {
      flex: 1,
      position: 'absolute',
      top: 0,
      left: 0,
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      backgroundColor: theme.colors.backgroundColor,
      padding: 20,
    },
    scrollContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.backgroundColor,
    },
    closeButton: {
      position: 'absolute',
      top: 10,
      right: 10,
      padding: 10,
    },
    modalTitle: {
      textAlign: 'center',
      marginBottom: 20,
    },
    sectionContainer: {
      width: '100%',
      marginVertical: 15,
    },
    sectionTitle: {
      marginBottom: 10,
      color: theme.colors.primaryOrange,
    },
    priceRangeItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
      borderWidth: 1,
      borderColor: theme.colors.black,
      borderRadius: 5,
      marginBottom: 10,
    },
    activePriceRangeItem: {
      backgroundColor: theme.colors.white,
    },
    variantField: {
      marginVertical: theme.spacing.H1,
    },
    variantFieldTitle: {
      flexDirection: 'row',
      gap: theme.spacing.H2,
    },
    variantStyles:{
      width: 100,
      alignItems: 'center',
      padding: 10,
      borderWidth: 1,
      borderColor: theme.colors.black,
      borderRadius: 5,
      marginBottom: 10,
    },
    variantValue: {
      textAlign: 'center',
    },

    sizeContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      alignItems: 'center',
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#e0e0e0',
    },
    colorOption: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderWidth: 1,
      borderColor: '#d9d9d9',
      borderRadius: 20,
      marginRight: 10,
      backgroundColor: '#f9f9f9',
    },
    activeColorOption: {
      borderColor: '#007BFF',
      backgroundColor: '#E7F3FF',
    },
    activePriceRangeText: {
      color: theme.colors.secondaryColor,
    },
    variantItem: {
      
      padding: 10,
      borderWidth: 1,
      borderColor: theme.colors.black,
      borderRadius: 5,
      marginBottom: 10,
    },
    selectedVariantItem: {
      backgroundColor: theme.colors.primaryColor,
    },
    quantityContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    quantityButton: {
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.primaryOrange,
      borderRadius: 5,
    },
    quantityButtonText: {
      color: theme.colors.white,
      fontSize: 18,
    },
    quantityText: {
      marginHorizontal: 20,
      fontSize: 16,
      color: theme.colors.black,
    },
    addToCartButton: {
      width: '100%',
      marginTop: 20,
      padding: 15,
      backgroundColor: theme.colors.primaryOrange,
      borderRadius: 5,
      alignItems: 'center',
    },
    
    addToCartButtonText: {
      color: theme.colors.white,
    },

    variantContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
    },
    variantDetails: {
      flex: 1,
    },
    variantText: {
      marginBottom: 4,
    },
    disabledButton: {
      opacity: 0.5,
    },
    
  });
};
