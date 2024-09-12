import React, {FC} from 'react';
import {Pressable, Text, View, StyleSheet, Button} from 'react-native';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {ToggleProps} from './types';
import { useStyles } from './Toggle.styles';

export const Toggle: FC<ToggleProps> = ({
  value,
  onPress,
  style,
  duration = 400,
  trackColors = {on: '#613CF2', off: '#EFEFEF'},
}) => {
  const height = useSharedValue(0);
  const width = useSharedValue(0);

  const styles = useStyles();

  const trackAnimatedStyle = useAnimatedStyle(() => {
    const color = interpolateColor(
      value,
      [0, 1],
      [trackColors.off, trackColors.on],
    );
    const colorValue = withTiming(color, {duration});

    return {
      backgroundColor: colorValue,
      borderRadius: height.value / 2,
    };
  });

  const thumbAnimatedStyle = useAnimatedStyle(() => {
    const moveValue = interpolate(
      Number(value),
      [0, 1],
      [0, width.value - height.value],
    );
    const translateValue = withTiming(moveValue, {duration});

    return {
      transform: [{translateX: translateValue}],
      borderRadius: height.value / 2,
    };
  });

  return (
    <Pressable onPress={onPress}>
      <Animated.View
        onLayout={e => {
          height.value = e.nativeEvent.layout.height;
          width.value = e.nativeEvent.layout.width;
        }}
        style={[styles.track, style, trackAnimatedStyle]}>
        <Animated.View
          style={[styles.thumb, thumbAnimatedStyle]}></Animated.View>
      </Animated.View>
    </Pressable>
  );
};

