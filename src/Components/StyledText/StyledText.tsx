import React, {FC} from 'react';
import {Text} from 'react-native';
import {StyledTextProps} from './types';
import {useStyles} from './StyledText.styles';

export const StyledText: FC<StyledTextProps> = ({
  text,
  backgroundColor = '#F0346226',
  textColor,
  style,
}) => {
  const styles = useStyles();
  return (
    <Text style={[styles.text, style, {backgroundColor, color: textColor}]}>
      {text.trim()}
    </Text>
  );
};
