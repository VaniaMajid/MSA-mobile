import { TextStyle } from "react-native";

export type CustomModalProps = {
    visible: boolean;
    header?: string;
    description: string;
    button1Text: string;
    button1Handler: () => void;
    button2Text?: string;
    button2Handler?: () => void;
    descriptionStyle?: TextStyle;
  }