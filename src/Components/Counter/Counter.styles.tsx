import {useEffect, useRef} from 'react';
import {Animated, Easing, StyleProp, ViewStyle} from 'react-native';
import {useTheme} from '~Contexts/ThemeContext';

type UseStylesProps = {
  current: number;
};

export const useStyles = ({current}: UseStylesProps) => {
  const theme = useTheme();
  const animatedIndicatorPosition = useRef(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animatedIndicatorPosition.current, {
      toValue: 1 * 16 * (current - 1),
      duration: 300,
      easing: Easing.bezier(0.0, 0.0, 0.1, 1),
      useNativeDriver: true,
    }).start();
  }, [current]);

  return {
    container: {
      flexDirection: 'row',
      position: 'relative',
    } as StyleProp<ViewStyle>,
    point: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: theme.colors.lightGray,
      marginStart: 8,
    } as StyleProp<ViewStyle>,
    firstPoint: {
      marginStart: 0,
    },
    currentIndicator: {
      height: 8,
      width: 24,
      borderRadius: 4,
      backgroundColor: theme.colors.darkGray,
      position: 'absolute',
      start: 0,
      top: 0,
      transform: [
        {
          translateX: animatedIndicatorPosition.current,
        },
      ],
    } as Animated.AnimatedProps<StyleProp<ViewStyle>>,
  };
};
