import { TextStyle, ViewStyle } from "react-native";

export type InfoRowProps = {
    label: string;
    value: string;
    labelStyle?: TextStyle;
    valueStyle?: TextStyle;
    containerStyle?: ViewStyle;
  }