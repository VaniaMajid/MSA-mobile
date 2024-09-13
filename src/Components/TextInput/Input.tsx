import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useStyles } from './input.styles';
import { InputFieldProps } from './types';
import { useTheme } from '~Contexts/ThemeContext';
import { IconEyeHide } from '~Components/Icons';

export const InputField: React.FC<InputFieldProps> = ({
  title,
  placeholder,
  isPassword = false,
  leftIcon,
  rightIcon,
  disabled = false, 
  ...rest
}) => {
  const styles = useStyles();
  const theme = useTheme();
  const [secureTextEntry, setSecureTextEntry] = useState(isPassword);

  return (
    <View style={styles.container}>
      {title && <Text style={[theme.fonts.inputFieldSmall, styles.label]}>{title}</Text>}
      <View style={[styles.inputContainer, disabled ? styles.disabledInputContainer : {}]}>
        {leftIcon && leftIcon}
        <TextInput
          style={[
            theme.fonts.subtextSmall,
            styles.input,
            
          ]}
          multiline= {false}
          placeholder={placeholder}
          placeholderTextColor={disabled ?theme.colors.disabled :theme.colors.accentColor}
          secureTextEntry={secureTextEntry}
          editable={!disabled} 
          {...rest}
        />
        {isPassword && rightIcon && (
          <TouchableOpacity
            onPress={() => setSecureTextEntry(!secureTextEntry)}
            disabled={disabled}
          >
            {secureTextEntry ? <IconEyeHide /> : rightIcon}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
