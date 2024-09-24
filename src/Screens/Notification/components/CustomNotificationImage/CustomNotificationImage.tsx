import React, { FC } from 'react';
import { View, Image } from 'react-native';
import { useStyles } from './CustomNotificationImage.styles';
import { CustomImageProps } from './types';

export const CustomNotificationImage: FC<CustomImageProps> = ({ source, style, showBadge = false }) => {
  const styles = useStyles();

  return (
    <View style={[styles.wrapper, style]}>
      <Image source={source} style={styles.image} />
      {showBadge && <View style={styles.badge} />}
      
    </View>
  );
};
