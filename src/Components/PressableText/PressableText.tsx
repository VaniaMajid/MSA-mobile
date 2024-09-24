import React, { FC } from 'react';
import { Text, TouchableOpacity, TextStyle, ViewStyle } from 'react-native';

interface PressableTextProps {
  text: string;
  onPress: () => void;
  style?: TextStyle | TextStyle[];
  containerStyle?: ViewStyle;
  disabled?: boolean; 
  icon?: React.ReactNode; 
}

export const PressableText: FC<PressableTextProps> = ({
  text,
  onPress,
  style,
  containerStyle,
  disabled = false, 
  icon
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[containerStyle, disabled ? { opacity: 0.5 } : {}]} 
      disabled={disabled} 
    >
      {icon && icon}
      <Text style={style}>{text}</Text>
    </TouchableOpacity>
  );
};
