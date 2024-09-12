import React, {FC} from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { useStyles } from './Button.styles';
import { useTheme } from '~Contexts/ThemeContext';

type ButtonProps = {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: ViewStyle | TextStyle[];
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
      <Text style={[textStyle, styles.text]}>{title}</Text>
    </TouchableOpacity>
  );
};
