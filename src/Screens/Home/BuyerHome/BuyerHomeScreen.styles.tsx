import { StyleSheet, Dimensions } from 'react-native';
import { useTheme } from '~Contexts/ThemeContext';

const { width } = Dimensions.get('window'); // Get the screen width

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.backgroundColor,
    },
    scrollContent: {
      paddingBottom: 50,
    },
    profileContainer: {
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    buyerText: {
      color: theme.colors.black,
      padding: theme.spacing.V2,
    },
    videoContainerWrapper: {
      flex: 1,
    },
    videoContainer: {
      width: '100%',
      height: 40,
      position: 'absolute',
      top: 0,
      backgroundColor: theme.colors.primaryOrange,
    },
    horizontalSection: {
      backgroundColor: theme.colors.white,      
    },
    sectionTitle: {
      marginLeft: theme.spacing.H4,
      color: theme.colors.black,
    },
    subSectionTitle: {
      marginLeft: theme.spacing.H4,
      color: theme.colors.gray,
    },
    horizontalScroll: {
      paddingVertical: theme.spacing.V1,
      paddingHorizontal: theme.spacing.H4,
    },
    horizontalItem: {
      marginHorizontal: theme.spacing.H1  ,
    },
    horizontalImage: {
      width: 120,
      height: 120,
      borderRadius: 8,
    },
    horizontalItemText: {
      maxWidth: width * 0.3,
      color: theme.colors.black,
    },
    horizontalItemMinOrderText: {
      maxWidth: width * 0.3,
      color: theme.colors.gray,
    },
    sectionHeader:{
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    gradientBackground: {
      paddingTop: theme.spacing.V1,
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    productContainer: {
      marginVertical: 10,
      marginHorizontal: theme.spacing.H1, // Adds space between items
      backgroundColor: theme.colors.white,
      borderRadius: 10,
      padding: 10,
    },
    productImage: {
      width: 150,
      height: 150,
      borderRadius: 15,
    },
    productDetails: {
      marginLeft: 10,
      justifyContent: 'center',
    },
    productName: {
      marginTop: theme.spacing.H1,
      color: theme.colors.black,
      width: width * 0.35, // Limit the width of the text
    },
    productPrice: {
      color: theme.colors.black,
      maxWidth: width * 0.35, // Limit the width of the text
    },
    productOrder: {
      color: theme.colors.gray,
      maxWidth: width * 0.35, // Limit the width of the text
    },
    productDuration: {
      color: theme.colors.gray,
    },
    flatListContent: {
      paddingHorizontal: theme.spacing.H4,
    },
    bgImageContainer:{
      position: 'absolute',
      right: 30,
      top: 10,
      transform: [{ rotate: '180deg'}]
    },
    bgImg: {
      width: 50,
      height: 50,
    },
    adContainer:{
      position: 'relative',
      width: '90%',
      marginVertical: theme.spacing.H2,
      alignSelf: 'center',
      padding: 10,
      backgroundColor: theme.colors.white,
      borderRadius: 10,

    },
    bgImageContainer2:{
      position: 'absolute',
      right: 10,
      top: 5,
      transform: [{ rotate: '180deg'}]
    },
    bgImg2: {
      width: 100,
      height: 100,
    },
    filterButton: {
      padding: theme.spacing.H2,
      width: '40%',
      marginLeft: theme.spacing.H4,
      backgroundColor: theme.colors.white,
      borderRadius: 20,
      borderWidth: 1,
    },
    buttonText:{
      textAlign: 'center',
      color: theme.colors.black,
    },
  });
};
