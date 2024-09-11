// src/Components/CustomCheckbox.tsx

import React, {FC} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {useTheme} from '~Contexts/ThemeContext';
import {StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {useStyles} from './Checkbox.styles';

interface CustomCheckboxProps {
  text: React.ReactNode;
  isChecked?: boolean;
  onPress: (isChecked: boolean) => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const Checkbox: FC<CustomCheckboxProps> = ({
  text,
  isChecked = false,
  onPress,
  style,
  textStyle,
}) => {
  const theme = useTheme();
  const styles = useStyles();

  return (
    <BouncyCheckbox
      size={22}
      fillColor={theme.colors.primaryColor}
      unFillColor={theme.colors.white}
      textComponent={text}
      iconStyle={styles.checkboxIcon}
      innerIconStyle={styles.checkboxInnerIcon}
      textStyle={[styles.checkboxText, textStyle]}
      onPress={onPress}
      style={style}
      isChecked={isChecked}
    />
  );
};
