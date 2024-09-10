import React, {FC} from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import { useStyles } from './Button.styles';

type ButtonProps = {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: ViewStyle;
  variant?: 'outline' | 'filled';
};

export const Button: FC<ButtonProps> = ({
  title,
  onPress,
  style,
  textStyle,
  variant = 'filled',
}) => {
  const styles = useStyles(variant);

  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};
