import {TextInputProps} from 'react-native';

export type InputFieldProps = TextInputProps & {
  title?: string;
  placeholder: string;
  isPassword?: boolean;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
};
