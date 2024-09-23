import React, {FC} from 'react';
import {View, ViewStyle, Text} from 'react-native';
import {IconContainerProps} from './types';
import { Colors } from '~Style/index';
import { useStyles } from './IconContainer.styles';

const IconContainer: FC<IconContainerProps> = ({
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
    <View style={styles.container}>
      <View style={containerStyle}>{icon}</View>
      {label && <Text style={styles.label}>{label}</Text>}
    </View>
  )
};

export default IconContainer;
