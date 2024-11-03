import {StyleSheet} from 'react-native';
import {useTheme} from '~Contexts/ThemeContext';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    overlay: {
      flex: 1,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'flex-start',
      alignItems: 'center',
      zIndex: 1,
    },
    modalContainer: {
      width: '100%',
      paddingTop: theme.spacing.V6,
      paddingHorizontal: theme.spacing.H2,
      backgroundColor: theme.colors.backgroundColor,
    },
    searchSuggestionsContainer: {
      padding: theme.spacing.V2,
    },
    searchSuggestionsHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },  
    toggleCategoriesButton: {
      paddingHorizontal: theme.spacing.V2,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    categoryList: {
      paddingBottom: theme.spacing.V19 * 2,
    },
    categoryItem: {
      width: theme.spacing.V14,
      alignItems: 'center',
      margin: 5,
      borderRadius: 5,
      padding: 10,
    },
    categoryImage: {
      width: 70,
      height: 70,
      marginBottom: 5,
      borderRadius: 50,
    },
    categoryName: {
      textAlign: 'center',
      color: theme.colors.black,
    },
    closeButton: {
      marginTop: theme.spacing.H2,
      alignSelf: 'flex-end',
      padding: theme.spacing.H2,
      borderRadius: theme.spacing.H1,
    },
  });
};