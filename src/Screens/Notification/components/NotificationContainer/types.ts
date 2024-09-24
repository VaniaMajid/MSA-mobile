import { ImageSourcePropType } from "react-native";

export type NotificationContainerProps = {
    title: string;
    time: string;
    subtext: string;
    showBadge: boolean;
    icon?: JSX.Element; 
    imageSource?: ImageSourcePropType; 
    backgroundColor?: string;
  }
  