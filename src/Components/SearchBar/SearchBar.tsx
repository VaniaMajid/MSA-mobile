import React from 'react';
import {TextInput, View} from 'react-native';
import {useStyles} from './SearchBar.styles';
import { IconSearch } from '~Components/Icons';

interface SearchBarProps {
  value: string;
  placeholder?: string;
  onChangeText: (text: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({value, placeholder = 'Search...', onChangeText}) => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={styles.placeholderColor.color}
        onChangeText={onChangeText}
      />
      <IconSearch size="xxs" />
    </View>
  );
};

