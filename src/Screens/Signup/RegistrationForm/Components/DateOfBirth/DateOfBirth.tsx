import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';
import { useStyles } from './DateOfBirth.styles';
import { IconInfoCircle } from '~Components/Icons';
import { useTheme } from '~Contexts/ThemeContext';
import { ErrorMessage } from '~Components/Error';

interface DateOfBirthInputProps {
  onChange: (day: string, month: string, year: string) => void;
  errors: { [key: string]: string };
}

export const DateOfBirthInput: React.FC<DateOfBirthInputProps> = ({ onChange, errors }) => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [activeField, setActiveField] = useState<'day' | 'month' | 'year' | null>(null);

  const dayRef = useRef<TextInput>(null);
  const monthRef = useRef<TextInput>(null);
  const yearRef = useRef<TextInput>(null);

  const styles = useStyles();
  const theme = useTheme();

  useEffect(() => {
    onChange(day, month, year);
  }, [day, month, year]);

  const handleDayChange = (text: string) => {
    setDay(text);
    if (text.length === 2) {
      monthRef.current?.focus();
    }
  };

  const handleMonthChange = (text: string) => {
    setMonth(text);
    if (text.length === 2) {
      yearRef.current?.focus();
    }
  };

  const handleYearChange = (text: string) => {
    setYear(text);
  };

  return (
    <View>
      <View style={styles.label}>
        <Text style={theme.fonts.inputFieldSmall}>Date of Birth</Text>
        <IconInfoCircle size="xxxs" />
      </View>
      <View style={styles.inputRow}>
        <TextInput
          ref={dayRef}
          style={[
            theme.fonts.inputFieldSmall,
            styles.input,
            activeField === 'day' && styles.activeInput,
          ]}
          maxLength={2}
          keyboardType="numeric"
          value={day}
          onChangeText={handleDayChange}
          placeholder="DD"
          placeholderTextColor={theme.colors.lightGray}
          returnKeyType="next"
          onFocus={() => setActiveField('day')}
          onBlur={() => setActiveField(null)}
          onSubmitEditing={() => monthRef.current?.focus()}
        />
        <TextInput
          ref={monthRef}
          style={[
            theme.fonts.inputFieldSmall,
            styles.input,
            activeField === 'month' && styles.activeInput,
          ]}
          maxLength={2}
          keyboardType="numeric"
          value={month}
          onChangeText={handleMonthChange}
          placeholder="MM"
          placeholderTextColor={theme.colors.lightGray}
          returnKeyType="next"
          onFocus={() => setActiveField('month')}
          onBlur={() => setActiveField(null)}
          onSubmitEditing={() => yearRef.current?.focus()}
        />
        <TextInput
          ref={yearRef}
          style={[
            theme.fonts.inputFieldSmall,
            styles.input,
            activeField === 'year' && styles.activeInput,
          ]}
          maxLength={4}
          keyboardType="numeric"
          value={year}
          onChangeText={handleYearChange}
          placeholder="YYYY"
          placeholderTextColor={theme.colors.lightGray}
          returnKeyType="done"
          onFocus={() => setActiveField('year')}
          onBlur={() => setActiveField(null)}
        />
      </View>
      {errors.dateOfBirth && <ErrorMessage message={errors.dateOfBirth} />}
    </View>
  );
};
