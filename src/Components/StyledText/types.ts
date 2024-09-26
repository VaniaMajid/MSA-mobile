import { StyleProp, TextStyle } from "react-native";

export type StyledTextProps = {
    text: string;
    backgroundColor?: string;
    textColor?: string;
    style?: StyleProp<TextStyle>;
  }
  