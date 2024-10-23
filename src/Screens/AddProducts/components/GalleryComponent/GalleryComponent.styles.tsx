// GalleryComponent.styles.tsx
import { StyleSheet } from 'react-native';
import { useTheme } from '~Contexts/ThemeContext'; // Adjust the path if needed

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container:{
      width: '100%',
    },
    imageBtnContainer:{
      padding: theme.spacing.H5,
      backgroundColor: theme.colors.white,
      borderRadius: 10,
    },
    label:{
      color: theme.colors.lightGray,
    },
    uploadButton: {
      
      backgroundColor: 'white',
      padding: theme.spacing.H5,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: theme.spacing.HGap1,
      borderWidth: 1,
      borderStyle: 'dashed',
      borderColor: theme.colors.lightGray,
    },
    imageContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: theme.spacing.HGap1,
    },
    imageWrapper: {
      position: 'relative',
      marginRight: theme.spacing.HGap1,
      marginBottom: theme.spacing.HGap1,
    },
    image: {
      width: 90,
      height: 90,
      borderRadius: 8,
    },
    removeButton: {
      position: 'absolute',
      top: 5,
      right: 5,
      borderRadius: 15,
    },
    removeButtonText: {
      color: 'white',
      fontWeight: 'bold',
    },
    errorText: {
      color: 'red',
    },
  });
};
