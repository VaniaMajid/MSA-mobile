import {StyleProp, ViewStyle} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';

export type ToggleProps = {
  value: any;
  onPress: () => void;
  style: StyleProp<ViewStyle>;
  duration?: number;
  trackColors?: {
    on: string;
    off: string;
  };
};
