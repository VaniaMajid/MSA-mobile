import React, {FC} from 'react';
import {View, ViewStyle, Text, TouchableOpacity} from 'react-native';
import {IconContainerProps} from './types';
import { Colors } from '~Style/index';
import { useStyles } from './IconContainer.styles';

export const IconContainer: FC<IconContainerProps> = ({
  height = 70,
  width = 70,
  backgroundColor = Colors.secondaryLight,
  icon,
  label,
}) => {
    const styles = useStyles();
  const containerStyle: ViewStyle = {
    height,
    width,
    backgroundColor,
    ...styles.containerIcon
  };

  return(
    <TouchableOpacity style={styles.container}>
      <View style={containerStyle}>{icon}</View>
      {label && <Text style={styles.label} numberOfLines={1} ellipsizeMode="tail">{label}</Text>}
    </TouchableOpacity>
  )
};
