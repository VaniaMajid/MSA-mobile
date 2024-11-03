import { act } from 'react';
import {StyleSheet} from 'react-native';
import { IconCheck } from '~Components/Icons';
import {useTheme} from '~Contexts/ThemeContext';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      backgroundColor: theme.colors.backgroundColor,
      padding: theme.spacing.H5,
    },
    listContainer: {
      marginTop: theme.spacing.V3,
      paddingBottom: theme.spacing.V20,
      gap: theme.spacing.V2,
    },
    productCard: {
      backgroundColor: theme.colors.white,
      borderRadius: theme.spacing.V1,
      padding: theme.spacing.H4,
    },
    productImageAndInfo: {
      flexDirection: 'row',
    },
    productImage: {
      width: 100,
      height: 100,
      alignSelf: 'flex-start',
      borderRadius: theme.spacing.V1,
      marginRight: theme.spacing.H4,
    },
    priceAndStockContainer: {
      flexDirection: 'row',
      gap: theme.spacing.H4,
    },
    productInfo: {
      color: theme.colors.gray,
    },
    productName: {
      color: theme.colors.black,
    
    },
    productDetails: {
      color: theme.colors.secondaryColor,
      
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
    },
    filterButtonText:{
        color: theme.colors.black,
        textAlign: 'center',
    },
    activeFilterButton:{
        backgroundColor: theme.colors.white,
    },
    activeFilterButtonText:{
        color: theme.colors.black,
        textAlign: 'center',
    },
    editText: {
        color: theme.colors.primaryColor,
        marginLeft: 5,
      },
      priceInput: {
        borderColor: theme.colors.gray,
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        marginVertical: 5,
      },
      stockInput: {
        borderColor: theme.colors.gray,
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        marginVertical: 5,
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: theme.spacing.V1,
      },
      editBtn: {
        width: '40%',
      },
      priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 5,
      },
      hiddenMenu: {
        position: 'absolute',
        width: 150,
        bottom: 60,
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
      iconCheckBtn: {
        borderWidth: 1,
        marginTop: theme.spacing.H2,
        width: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 10,
      },
  });
};
