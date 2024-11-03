import React from 'react';
import { TextInput, View, TouchableOpacity } from 'react-native';
import { useStyles } from './SearchBar.styles';
import { IconSearch } from '~Components/Icons';

interface SearchBarProps {
  value: string;
  placeholder?: string;
  onChangeText: (text: string) => void;
  onPress?: () => void; // onPress prop to open modal
  onFocus?: () => void; // Add onFocus prop to handle focus event
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  placeholder = 'Search...',
  onChangeText,
  onPress, // Destructure onPress prop
  onFocus, // Destructure onFocus prop
}) => {
  const styles = useStyles();

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={styles.placeholderColor.color}
        onChangeText={onChangeText}
        onFocus={onFocus} // Call onFocus when the input gains focus
      />
      <IconSearch size="xxs" />
    </TouchableOpacity>
  );
};
