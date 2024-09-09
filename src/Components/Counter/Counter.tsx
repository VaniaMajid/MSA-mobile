import React, {FC} from 'react';
import {Animated, View} from 'react-native';
import {useStyles} from './Counter.styles';
import {CounterProps} from './types';
import {useTheme} from '~Contexts/ThemeContext';

export const CounterSlider: FC<CounterProps> = ({
  current,
  total,
  color = 'darkGray',
}) => {
  const theme = useTheme();
  const styles = useStyles({
    current,
  });

  return (
    <View style={[styles.container]}>
      {Array.from({length: total + 1}).map((_, index) => (
        <View
          style={[styles.point, index === 0 && styles.firstPoint]}
          key={index}
        />
      ))}
      <Animated.View
        style={[
          styles.currentIndicator as any,
          color ? {backgroundColor: theme.colors[color]} : {},
        ]}
      />
    </View>
  );
};
