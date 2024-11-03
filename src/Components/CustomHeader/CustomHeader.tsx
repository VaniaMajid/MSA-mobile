import React, { useState } from 'react';
import { View } from 'react-native';
import { useStyles } from './CustomHeader.styles';
import { SearchBar } from '~Components/SearchBar'; // Import your SearchBar component
import { SearchModal } from '~Components/SearchModal'; // Import your SearchModal component

export const CustomHeader: React.FC<{ navigation: any }> = ({ navigation }) => {
  const styles = useStyles();
  const [isModalVisible, setModalVisible] = useState(false);
  const [searchText, setSearchText] = useState('');

  const handleSearchBarPress = () => {
    setModalVisible(true); // Open modal when search bar is pressed
  };

  const handleCategorySelect = (category: string) => {
    console.log(`Selected category: ${category}`);
    setSearchText(category); // Set selected category as search text
    setModalVisible(false); // Close modal after selection
  };

  const handleChangeText = (text: string) => {
    setSearchText(text);
    if (text.length > 0) { // Change condition to check for non-empty input
      setModalVisible(true); // Open modal when user types in the search bar
    } else {
      setModalVisible(false); // Close modal if the search text is empty
    }
  };

  const handleSearchBarFocus = () => {
    setModalVisible(true); // Open modal when the search bar gains focus
  };

  return (
    <View style={[styles.headerContainer, isModalVisible && styles.fullScreenHeader]}>
      <SearchBar
        value={searchText}
        onChangeText={handleChangeText} // Call the updated handleChangeText
        onPress={handleSearchBarPress} // Keep the onPress handler if needed
        onFocus={handleSearchBarFocus} // Open modal on focus
      />
      
      <SearchModal
      visible={isModalVisible}
      onClose={() => setModalVisible(false)}
      onCategorySelect={handleCategorySelect}
      searchQuery={searchText} // Pass the search text here
      />
    </View>
  );
};
