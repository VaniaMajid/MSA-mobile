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
  variant?: 'outline' | 'filled';
  disabled?: boolean;
  icon?: React.ReactNode;
};

export const Button: FC<ButtonProps> = ({
  title,
  onPress,
  style,
  textStyle,
  variant = 'filled',
  disabled = false,
  icon,
}) => {
  const styles = useStyles(variant, disabled);
  const theme = useTheme();

  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      disabled={disabled}>
      {title && (
        <Text style={[theme.fonts.buttonSemiBold, textStyle, styles.text]}>
          {title}
        </Text>
      )}
      {icon && <View>{icon}</View>}
    </TouchableOpacity>
  );
};
