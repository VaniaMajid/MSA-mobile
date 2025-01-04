import {StyleSheet} from 'react-native';
import {useTheme} from '~Contexts/ThemeContext';

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      padding: theme.spacing.V2,
      backgroundColor: theme.colors.backgroundColor,
    },
    browseCategories: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 5,
    },
    browseCategoriesText: {
      color: theme.colors.secondaryOrange,
    },
    categoryList: {
      paddingVertical: 20,
      justifyContent: 'center',
    },
    categoryItem: {
      width: theme.spacing.V13,
      alignItems: 'center',
      margin: 8,
      padding: theme.spacing.V1,
      borderRadius: 10,
      backgroundColor: theme.colors.white,
    },
    categoryImage: {
      width: 80,
      height: 80,
      marginBottom: 8,
      resizeMode: 'cover',
      borderRadius: 10,
    },
    categoryName: {
      textAlign: 'center',
    },
    dropdown: {
      color: theme.colors.black,
    }
    
  });
};
