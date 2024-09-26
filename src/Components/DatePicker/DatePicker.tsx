import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {CustomDatePickerProps} from './types';
import {useStyles} from './DatePicker.styles';
import {useTheme} from '~Contexts/ThemeContext';
import {IconArrowDown} from '~Components/Icons';
import {ErrorMessage} from '~Components/Error';

export const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  value,
  onChange,
  title,
  errorMessage,
}) => {
  const [open, setOpen] = useState(false);
  const styles = useStyles();
  const theme = useTheme();
  return (
    <View>
      <Text style={[theme.fonts.inputFieldSmall, styles.label]}>{title}</Text>

      <View style={[styles.dateContainer, errorMessage ? styles.errorDateContainer : {},]}>
        {value ? (
          <Text style={styles.dateText}>
            {new Date(value).toLocaleDateString()}
          </Text>
        ) : (
          <Text style={[styles.dateText, {color: theme.colors.accentColor}]}>
            Select a date
          </Text>
        )}
        <TouchableOpacity onPress={() => setOpen(true)}>
          <IconArrowDown size="xxxs" />
        </TouchableOpacity>
      </View>

      <DatePicker
        modal
        open={open}
        date={value ? new Date(value) : new Date()}
        mode="date"
        onConfirm={selectedDate => {
          setOpen(false);
          onChange(selectedDate);
        }}
        onCancel={() => setOpen(false)}
        buttonColor={theme.colors.primaryColor}
        dividerColor={theme.colors.secondaryColor}

      />

      {errorMessage ? <ErrorMessage message={errorMessage} /> : null}
    </View>
  );
};
