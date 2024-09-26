import { TextStyle } from "react-native";

export type CustomModalProps = {
    visible: boolean;
    header?: string;
    description: string;
    primaryButtonText: string;
    primaryButtonHandler: () => void;
    secondaryButtonText?: string;
    secondaryButtonHandler?: () => void;
    descriptionStyle?: TextStyle;
  }