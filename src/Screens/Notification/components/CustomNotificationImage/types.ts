import { ImageSourcePropType, ImageStyle } from "react-native";

export type CustomImageProps = {
    source: ImageSourcePropType; 
    style?: ImageStyle;
    showBadge?: boolean;
  }