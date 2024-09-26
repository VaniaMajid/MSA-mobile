export type CustomDatePickerProps = {
    value?: string;
    onChange: (date: Date) => void;
    title: string;
    errorMessage?: string;
  }