import React, {FC} from 'react';
import {View, ViewStyle, Text, TouchableOpacity} from 'react-native';
import {IconContainerProps} from './types';
import {Colors} from '~Style/index';
import {useStyles} from './IconContainer.styles';

export const IconContainer: FC<IconContainerProps> = ({
  height = 70,
  width = 70,
  backgroundColor = Colors.secondaryLight,
  icon,
  label,
  isInteractive = true,
  showBadge = false,
  onPress
}) => {
  const styles = useStyles();

  const containerStyle: ViewStyle = {
    height,
    width,
    backgroundColor,
    ...styles.containerIcon,
  };

  const Content = (
    <>
      <View style={containerStyle}>{icon}</View>
      {label && (
        <Text style={styles.label} numberOfLines={1} ellipsizeMode="tail">
          {label}
        </Text>
      )}
      {showBadge && <View style={styles.badge} />}
    </>
  );

  return isInteractive ? (
    <TouchableOpacity style={styles.container} onPress={onPress}>{Content}</TouchableOpacity>
  ) : (
    <View style={styles.container}>{Content}</View>
  );
};
