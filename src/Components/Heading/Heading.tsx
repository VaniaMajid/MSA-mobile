import React, {FC} from 'react';
import { Text, TextStyle } from 'react-native';
import { useStyles } from './Heading.styles';
import { useTheme } from '~Contexts/ThemeContext';

type HeadingProps = {
  fontSize?: number; 
  color?: string; 
  style?: TextStyle | TextStyle[]; 
  title: string; 
};

export const Heading: FC<HeadingProps> = ({
  fontSize = 20, 
  color,
  style,
  title,
}) => {
    const theme = useTheme(); 
    const defaultColor = color || theme.colors.darkGray;
    const styles = useStyles(fontSize, defaultColor);

  return <Text style={[styles.text, style]}>{title}</Text>;
};
