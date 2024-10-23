import React, { useState, forwardRef } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useStyles } from './input.styles';
import { InputFieldProps } from './types';
import { useTheme } from '~Contexts/ThemeContext';
import { IconEyeHide } from '~Components/Icons';
import { ErrorMessage } from '~Components/Error';

export const InputField = forwardRef<TextInput, InputFieldProps>(
  (
    {
      title,
      placeholder,
      isPassword = false,
      leftIcon,
      rightIcon,
      disabled = false,
      errorMessage = '',
      multiline,
      variant, // Include variant here
      number = false, // New prop for numeric input
      ...rest
    },
    ref
  ) => {
    const styles = useStyles(variant); // Pass variant to styles
    const theme = useTheme();
    const [secureTextEntry, setSecureTextEntry] = useState(isPassword);
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState(''); // Local state for input value

    // Function to handle input change and allow only numbers if 'number' prop is set
    const handleInputChange = (text: string) => {
      if (number) {
        // Filter out non-numeric characters
        const numericText = text.replace(/[^0-9]/g, '');
        setInputValue(numericText);
      } else {
        setInputValue(text);
      }
    };

    return (
      <View style={styles.container}>
        {title && (
          <Text style={[theme.fonts.inputFieldSmall, styles.label]}>{title}</Text>
        )}

        <View
          style={[
            styles.inputContainer,
            multiline ? { height: 110 } : {},
            disabled ? styles.disabledInputContainer : {},
            errorMessage ? styles.errorInputContainer : {},
            // Remove focus border color for 'forms' variant
            variant === 'forms' || variant === 'forms50'
              ? {}
              : isFocused
              ? { borderColor: theme.colors.primaryColor, borderWidth: 2 }
              : {},
          ]}
        >
          {leftIcon && leftIcon}
          <TextInput
            ref={ref}
            style={[
              theme.fonts.subtextSmall,
              styles.input,
              multiline ? { height: '100%', textAlignVertical: 'top' } : {},
            ]}
            multiline={multiline}
            placeholder={placeholder}
            placeholderTextColor={
              disabled ? theme.colors.disabled : theme.colors.accentColor
            }
            secureTextEntry={secureTextEntry}
            editable={!disabled}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            keyboardType={number ? 'numeric' : 'default'} // Set keyboard type based on 'number' prop
            value={inputValue} // Controlled value for input field
            onChangeText={handleInputChange} // Handle input change with numeric filtering
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
        {errorMessage ? <ErrorMessage message={errorMessage} /> : null}
      </View>
    );
  }
);
