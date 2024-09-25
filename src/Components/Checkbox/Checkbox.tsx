// src/Components/CustomCheckbox.tsx

import React, {FC} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {useTheme} from '~Contexts/ThemeContext';
import {ViewStyle, TextStyle} from 'react-native';
import {useStyles} from './Checkbox.styles';

interface CustomCheckboxProps {
  text: React.ReactNode;
  isChecked?: boolean;
  lockChecked?: boolean;
  onPress: (isChecked: boolean) => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  iconStyle?: ViewStyle;
}

export const Checkbox: FC<CustomCheckboxProps> = ({
  text,
  isChecked = false,
  lockChecked = false,
  onPress,
  style,
  textStyle,
  iconStyle,
}) => {
  const theme = useTheme();
  const styles = useStyles();

  return (
    <BouncyCheckbox
      useBuiltInState={false}
      size={22}
      fillColor={theme.colors.primaryColor}
      unFillColor={theme.colors.white}
      textComponent={text}
      iconStyle={[styles.checkboxIcon, iconStyle]}
      innerIconStyle={[styles.checkboxInnerIcon, iconStyle]}
      textStyle={[styles.checkboxText, textStyle]}
      onPress={() => {
        if (!lockChecked) {
          onPress(!isChecked);
        }
      }}
      style={style}
      isChecked={lockChecked ? true : isChecked}
    />
  );
};
