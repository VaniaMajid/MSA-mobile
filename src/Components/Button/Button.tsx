import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import {useStyles} from './Button.styles'

type ButtonProps ={
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: ViewStyle;
}

export const Button: React.FC<ButtonProps> = ({ title, onPress, style, textStyle }) => {

const styles = useStyles()

  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};



