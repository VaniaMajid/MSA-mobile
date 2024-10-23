import {TextInputProps} from 'react-native';

export type InputFieldProps = TextInputProps & {
  title?: string;
  placeholder?: string;
  isPassword?: boolean;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  disabled?: boolean;
  errorMessage?: string;
  number?: boolean; // Add number prop here
  variant?: 'default' | 'forms' | 'forms50'; // Add variant here
};
