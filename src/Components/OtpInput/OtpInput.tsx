import React, {useRef, useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {useStyles} from './OtpInput.styles';

interface OtpInputProps {
  length: number;
  onChange: (otp: string) => void;
}

export const OtpInput: React.FC<OtpInputProps> = ({length, onChange}) => {
  const styles = useStyles();
  const [otp, setOtp] = useState<string[]>(Array(length).fill(''));
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const inputs = useRef<Array<TextInput | null>>([]);

  const handleChange = (text: string, index: number) => {
    if (/[^0-9]/.test(text)) return;
    const newOtp = [...otp];
    newOtp[index] = text;
    if (text && index < length - 1) {
      inputs.current[index + 1]?.focus();
    }
    setOtp(newOtp);
    onChange(newOtp.join(''));
  };

  const handleKeyPress = (
    {nativeEvent}: {nativeEvent: {key: string}},
    index: number,
  ) => {
    if (nativeEvent.key === 'Backspace') {
      if (otp[index] === '' && index > 0) {
        inputs.current[index - 1]?.focus();
        const newOtp = [...otp];
        newOtp[index - 1] = '';
        setOtp(newOtp);
        onChange(newOtp.join(''));
      }
    }
  };

  return (
    <View style={styles.container}>
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          ref={input => (inputs.current[index] = input)}
          style={[styles.input, focusedIndex === index && styles.inputFocused]}
          value={digit}
          onChangeText={text => handleChange(text, index)}
          onKeyPress={e => handleKeyPress(e, index)}
          keyboardType="numeric"
          maxLength={1}
          onFocus={() => setFocusedIndex(index)}
          onBlur={() => setFocusedIndex(null)}
        />
      ))}
    </View>
  );
};
