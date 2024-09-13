import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import { useStyles } from './DateOfBirth.styles';
import { IconInfoCircle } from '~Components/Icons';
import { useTheme } from '~Contexts/ThemeContext';

export const DateOfBirthInput: React.FC = () => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const styles = useStyles();
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.label}>
        <Text style={theme.fonts.inputFieldSmall}>
        Date of Birth 
        </Text>
        <IconInfoCircle size='xxxs'/>
      </View>
      <View style={styles.inputRow}>
        <View>
          <TextInput
            style={[theme.fonts.inputFieldSmall,styles.input]}
            maxLength={2}
            keyboardType="numeric"
            value={day}
            onChangeText={setDay}
            placeholder="DD"
            placeholderTextColor="#C7C7C7"
          />
        </View>
        <TextInput
          style={[theme.fonts.inputFieldSmall,styles.input]}
          maxLength={2}
          keyboardType="numeric"
          value={month}
          onChangeText={setMonth}
          placeholder="MM"
          placeholderTextColor="#C7C7C7"
        />
        <TextInput
          style={[theme.fonts.inputFieldSmall,styles.input]}
          maxLength={4}
          keyboardType="numeric"
          value={year}
          onChangeText={setYear}
          placeholder="YYYY"
          placeholderTextColor="#C7C7C7"
        />
      </View>
    </View>
  );
};


