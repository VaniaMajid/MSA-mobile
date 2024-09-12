import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useStyles} from './input.styles';
import {InputFieldProps} from './types';
import { useTheme } from '~Contexts/ThemeContext';

export const InputField: React.FC<InputFieldProps> = ({
  title,
  placeholder,
  isPassword = false,
  leftIcon,
  rightIcon,
  ...rest
}) => {
  const styles = useStyles();
  const theme = useTheme();
  const [secureTextEntry, setSecureTextEntry] = useState(isPassword);

  return (
    <View style={styles.container}>
      {title && <Text style={[theme.fonts.inputFieldSmall, styles.label]}>{title}</Text>}
      <View style={styles.inputContainer}>
        {leftIcon && leftIcon}
        <TextInput
          style={[theme.fonts.subtextSmall,styles.input]}
          placeholder={placeholder}
          placeholderTextColor="#888"
          secureTextEntry={secureTextEntry}
          {...rest}
        />
        {isPassword && rightIcon && (
          <TouchableOpacity
            onPress={() => setSecureTextEntry(!secureTextEntry)}>
            {rightIcon}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
