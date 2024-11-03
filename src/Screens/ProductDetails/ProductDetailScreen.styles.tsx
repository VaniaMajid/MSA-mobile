import {StyleSheet} from 'react-native';
import { useTheme } from '~Contexts/ThemeContext';
export const useStyles = () => {
    const theme = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.backgroundColor,
    },
    carouselContainer: {
      marginBottom: theme.spacing.V2,
    },
    wishlistContainer:{
        position: 'absolute',
        width: 50,
        height: 50,
        top: 20,
        right: 20,
        backgroundColor: theme.colors.white,
        padding: theme.spacing.H4*0.8,
        borderRadius: 60,
        shadowColor: theme.colors.black,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        zIndex: 1,
    },
    imageContainer: {
      width: '100%',
      height: 400,
      backgroundColor: theme.colors.white, // Off-white background for images
      justifyContent: 'center',
      alignItems: 'center',
    },
    carouselImage: {
      width: '100%',
      height: 400,
    },
    paginationContainer: {
      position: 'absolute',
      alignSelf: 'center',
      bottom: 20,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    dot: {
      width: 10,
      height: 10,
      borderRadius: 5,
      marginHorizontal: 5,
    },
    activeDot: {
      backgroundColor: '#FF5733', // Active dot color
    },
    inactiveDot: {
      backgroundColor: '#CCCCCC', // Inactive dot color
    },
    productDetailsContainer: {
      paddingHorizontal: theme.spacing.H4,
    },
    productName: {
      color: theme.colors.darkGray,
      maxWidth: '90%',
    },
    productInfoHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    productDetails: {
        marginTop: theme.spacing.V1,
      color: theme.colors.gray,
    },
    ratingsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: theme.spacing.H4,
    },
    ratingsText: {
      marginLeft: 5,
    },
    priceRangeContainer: {
      paddingHorizontal: theme.spacing.H4,
    },
    priceRangeTitle: {
      color: theme.colors.darkGray,
    },
    starContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    priceRangeItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 5,
    },
    actionButtonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingVertical: theme.spacing.V2,
      paddingHorizontal: theme.spacing.H4,
    },
    addToCartButton: {
      backgroundColor:  theme.colors.primaryOrange,
      padding: theme.spacing.H3*0.8,
      borderRadius: 60,
      shadowColor: theme.colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    chatNowButton: {
      width: '45%',
      backgroundColor: theme.colors.primaryOrange,
      paddingVertical: 15,
      paddingHorizontal: 20,
      borderRadius: 10,
    },
    inquiryButton: {
        width: '45%',
      backgroundColor: theme.colors.white,
      borderWidth: 1,
      paddingVertical: 15,
      paddingHorizontal: 20,
      borderRadius: 30,
    },
    chatNowButtonText: {
        textAlign: 'center',
      color: theme.colors.white,
    },
    inquiryButtonText: {
        textAlign: 'center',
      color: theme.colors.black,
    },
    reviewsContainer: {
      paddingHorizontal: 20,
      marginVertical: theme.spacing.H1,
    },
    reviewsTitle: {
        color: theme.colors.primaryOrange,
    },
    reviewItem: {
      marginBottom: 15,
    },
    reviewUser: {
      color: theme.colors.black
    },
    reviewComment: {
      color: '#666',
      marginVertical: 5,
    },
    reviewRating: {
      color: '#666',
    },
    reviewHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
        paddingHorizontal:theme.spacing.H2,
    },
    reviewDetails: {
        backgroundColor: theme.colors.white,
        borderRadius: 10,
        padding: 10,
    }
  });
};
