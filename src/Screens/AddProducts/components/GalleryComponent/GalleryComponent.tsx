// GalleryComponent.tsx
import React, { FC } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { launchImageLibrary } from 'react-native-image-picker';
import { useStyles } from './GalleryComponent.styles';
import { useTheme } from '~Contexts/ThemeContext'; // Update the path if needed
import { AddProductsFormType } from '../../types'; // Update the path to your types
import { IconCross, IconGallery } from '~Components/Icons';

interface GalleryComponentProps {
  control: any;
  errors: any;
  name: string;
}

export const GalleryComponent: FC<GalleryComponentProps> = ({ control, errors, name }) => {
  const styles = useStyles();
  const theme = useTheme();
  const handleImagePick = async (onChange: (value: string[]) => void) => {
    const options = {
      mediaType: 'photo' as const,
      selectionLimit: 5,
    };

    const response = await launchImageLibrary(options);

    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.errorCode) {
      console.log('ImagePicker Error: ', response.errorMessage);
    } else if (response.assets) {
      const imageUris = response.assets
        .map(asset => asset.uri)
        .filter((uri): uri is string => uri !== undefined);
      onChange(imageUris);
    }
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <View style= {styles.container}>
          <View style= {styles.imageBtnContainer}>
            <Text style={[theme.fonts.paragraphRegularSmall,styles.label]}>Product Images (0/5)</Text>
            <TouchableOpacity
              style={styles.uploadButton}
              onPress={() => handleImagePick(onChange)}
            >
              <IconGallery size="s" />
            </TouchableOpacity>
          </View>
          <View style={styles.imageContainer}>
            {value?.map((uri: string, index: number) => (
              <View key={index} style={styles.imageWrapper}>
                <Image source={{ uri }} style={styles.image} />
                <TouchableOpacity
                  style={styles.removeButton}
                  onPress={() => {
                    const updatedImages = value.filter((_ :number, imgIndex: number) => imgIndex !== index);
                    onChange(updatedImages);
                  }}
                >
                  <IconCross size="xxs" />
                </TouchableOpacity>
              </View>
            ))}
          </View>
          <Text style={styles.errorText}>{errors[name]?.message}</Text>
        </View>
      )}
    />
  );
};