import React, {FC} from 'react';
import {View, Text, Pressable, TouchableWithoutFeedback} from 'react-native';
import {InfoOverlayProps} from './types';
import {useStyles} from './InfoOverlay.styles';

export const InfoOverlay: FC<InfoOverlayProps> = ({
  visible,
  infoText,
}) => {
  const styles = useStyles();

  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <Text style={styles.info}>{infoText}</Text>
    </View>
  );
};
