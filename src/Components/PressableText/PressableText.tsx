import React, { FC } from 'react';
import { Text, TouchableOpacity, TextStyle, ViewStyle } from 'react-native';

interface PressableTextProps {
  text: string;
  onPress: () => void;
  style?: TextStyle;
  containerStyle?: ViewStyle;
  disabled?: boolean; 
}

export const PressableText: FC<PressableTextProps> = ({
  text,
  onPress,
  style,
  containerStyle,
  disabled = false, 
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[containerStyle, disabled ? { opacity: 0.5 } : {}]} 
      disabled={disabled} 
    >
      <Text style={style}>{text}</Text>
    </TouchableOpacity>
  );
};
