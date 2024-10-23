import React, {FC} from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  View,
} from 'react-native';
import {useStyles} from './Button.styles';
import {useTheme} from '~Contexts/ThemeContext';

type ButtonProps = {
  title?: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: ViewStyle | TextStyle[];
  variant?: 'outline' | 'filled' | 'outline2' | 'pear';
  disabled?: boolean;
  icon?: React.ReactNode;
  leftIcon?: React.ReactNode;  // SVG before the text
  rightIcon?: React.ReactNode; // SVG after the text
};

export const Button: FC<ButtonProps> = ({
  title,
  onPress,
  style,
  textStyle,
  variant = 'filled',
  disabled = false,
  icon,
  leftIcon,
  rightIcon,
}) => {
  const styles = useStyles(variant, disabled);
  const theme = useTheme();

  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      disabled={disabled}>

      {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
      {title && (
        <Text style={[theme.fonts.buttonSemiBold, textStyle, styles.text]}>
          {title}
        </Text>
      )}
      {icon && <View>{icon}</View>}
      {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
    </TouchableOpacity>
  );
};
