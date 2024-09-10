import React, { FC } from 'react';
import { Text, TouchableOpacity, TextStyle, ViewStyle } from 'react-native';

interface PressableTextProps {
  text: string;
  onPress: () => void;
  style?: TextStyle;
  containerStyle?: ViewStyle;
}

export const PressableText: FC<PressableTextProps> = ({ text, onPress, style, containerStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={containerStyle}>
      <Text style={style}>{text}</Text>
    </TouchableOpacity>
  );
};
