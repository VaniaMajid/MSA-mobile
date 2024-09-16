import React, {FC} from 'react';
import {Text, TextStyle, StyleSheet} from 'react-native';
import {useStyles} from './Error.styles';
import {useTheme} from '~Contexts/ThemeContext';

interface ErrorMessageProps {
  message: string;
  style?: TextStyle;
}

export const ErrorMessage: FC<ErrorMessageProps> = ({message, style}) => {
  const theme = useTheme();
  const styles = useStyles();
  return (
    <Text style={[theme.fonts.subtextSmall, styles.errorText, style]}>
      {message}
    </Text>
  );
};
