import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

export const DateOfBirthInput: React.FC = () => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        Date of Birth <Text style={styles.infoIcon}>!</Text>
      </Text>
      <View style={styles.inputRow}>
        <View>
          <TextInput
            style={styles.input}
            maxLength={2}
            keyboardType="numeric"
            value={day}
            onChangeText={setDay}
            placeholder="DD"
            placeholderTextColor="#C7C7C7"
          />
        </View>
        <TextInput
          style={styles.input}
          maxLength={2}
          keyboardType="numeric"
          value={month}
          onChangeText={setMonth}
          placeholder="MM"
          placeholderTextColor="#C7C7C7"
        />
        <TextInput
          style={[styles.input, styles.yearInput]}
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

const styles = StyleSheet.create({
  container: {},
  label: {
    fontSize: 16,
    color: '#000',
    marginBottom: 10,
  },
  infoIcon: {
    color: '#5C4DFF',
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    width: 107,
    height: 48,
    flexShrink: 0,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 6,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  yearInput: {
    width: 100,
  },
});
