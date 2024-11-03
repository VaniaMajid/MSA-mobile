import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useStyles } from './SearchModal.styles';
import { useTheme } from '~Contexts/ThemeContext';
import { IconCategoriesActive, IconCategoriesInactive, IconCross, IconRightArrowGray } from '~Components/Icons';

interface SearchModalProps {
  visible: boolean;
  onClose: () => void;
  onCategorySelect: (category: string) => void;
  searchQuery: string; // Pass the search query from the search bar
}

// Define the structure for a category item
interface Category {
  id: string;
  name: string;
  image: any;
}

const categories: Category[] = [
  { id: '1', name: 'Electronics', image: require('../../Assets/images/productImg1.png') },
  { id: '2', name: 'Fashion', image: require('../../Assets/images/productImg2.png') },
  { id: '3', name: 'Men', image: require('../../Assets/images/productImg3.png') },
  { id: '4', name: 'Home Appliances', image: require('../../Assets/images/productImg2.png') },
  { id: '5', name: 'Watches', image: require('../../Assets/images/productImg3.png') },
  { id: '6', name: 'Footwear', image: require('../../Assets/images/productImg1.png') },
  { id: '7', name: 'Jewelry', image: require('../../Assets/images/productImg3.png') },
  { id: '8', name: 'Beauty Products', image: require('../../Assets/images/productImg1.png') },
  { id: '9', name: 'Books', image: require('../../Assets/images/productImg2.png') },
  { id: '10', name: 'Toys', image: require('../../Assets/images/productImg1.png') },
  { id: '11', name: 'Sports Equipment', image: require('../../Assets/images/productImg2.png') },
  { id: '12', name: 'Health & Fitness', image: require('../../Assets/images/productImg3.png') },
  { id: '13', name: 'Outdoor Gear', image: require('../../Assets/images/productImg2.png') },
  { id: '14', name: 'Gardening Tools', image: require('../../Assets/images/productImg3.png') },
  { id: '15', name: 'Pet Supplies', image: require('../../Assets/images/productImg1.png') },
  { id: '16', name: 'Stationery', image: require('../../Assets/images/productImg3.png') },
  { id: '17', name: 'Craft Supplies', image: require('../../Assets/images/productImg1.png') },
  { id: '18', name: 'Office Supplies', image: require('../../Assets/images/productImg2.png') },
  { id: '19', name: 'Musical Instruments', image: require('../../Assets/images/productImg1.png') },
  { id: '20', name: 'Baby Products', image: require('../../Assets/images/productImg2.png') },
  { id: '21', name: 'Grocery', image: require('../../Assets/images/productImg3.png') },
  { id: '22', name: 'Luggage & Bags', image: require('../../Assets/images/productImg2.png') },
  { id: '23', name: 'Virtual Reality Gear', image: require('../../Assets/images/productImg1.png') },
  { id: '24', name: 'Beverages', image: require('../../Assets/images/productImg3.png') },
  { id: '25', name: 'Travel Accessories', image: require('../../Assets/images/productImg1.png') },
];

export const SearchModal: React.FC<SearchModalProps> = ({
  visible,
  onClose,
  onCategorySelect,
  searchQuery,
}) => {
  const styles = useStyles();
  const theme = useTheme();

  const [showCategories, setShowCategories] = useState(false); // Toggle state for categories
  const [searchHistory, setSearchHistory] = useState<string[]>([]); // To store search history

  useEffect(() => {
    // Suggest categories based on search query
    if (searchQuery.length > 0) {
      setShowCategories(false); // Hide categories when typing
    }
  }, [searchQuery]);

  const handleCategoryToggle = () => {
    setShowCategories(!showCategories); // Toggle the category view
  };

  const handleCategoryPress = (category: string) => {
    onCategorySelect(category);
    setSearchHistory([category, ...searchHistory]); // Add selected category to search history
  };

  const renderCategory = ({ item }: { item: Category }) => (
    <TouchableOpacity
      onPress={() => handleCategoryPress(item.name)}
      style={styles.categoryItem}
    >
      <Image source={item.image} style={styles.categoryImage} />
      <Text style={[theme.fonts.paragraphRegularSmall, styles.categoryName]}>{item.name}</Text>
    </TouchableOpacity>
  );

  // Determine categories to show based on search query
  const filteredCategories = searchQuery.length > 0
    ? categories.filter((category) =>
        category.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : categories; // Show all categories when there's no query

  return (
    visible && (
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <View style={styles.searchSuggestionsContainer}>
            <View style={styles.searchSuggestionsHeader}>
              <Text style={[theme.fonts.paragraphSemiBold, { color: theme.colors.black }]}>
                Search Suggestions
              </Text>
              <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                <IconCross size="xxxs" />
              </TouchableOpacity>
            </View>
            <ScrollView>
              {/* Display search history when searchQuery is empty */}
              {searchQuery.length === 0 ? (
                searchHistory.length > 0 ? (
                  searchHistory.map((historyItem, index) => (
                    <TouchableOpacity key={index} onPress={() => onCategorySelect(historyItem)}>
                      <Text style={theme.fonts.paragraphRegularSmall}>{historyItem}</Text>
                    </TouchableOpacity>
                  ))
                ) : (
                  <Text style={theme.fonts.paragraphRegularSmall}>No recent searches</Text>
                )
              ) : (
                filteredCategories.map((category) => (
                  <TouchableOpacity
                    key={category.id}
                    onPress={() => handleCategoryPress(category.name)}
                  >
                    <Text style={theme.fonts.paragraphRegularSmall}>
                      {category.name}
                    </Text>
                  </TouchableOpacity>
                ))
              )}
            </ScrollView>
          </View>

          <TouchableOpacity onPress={handleCategoryToggle} style={styles.toggleCategoriesButton}>
            <Text style={[theme.fonts.paragraphSemiBold, { color: theme.colors.black }]}>
              {showCategories ? 'Hide Categories' : 'Show Categories'}
            </Text>
            {showCategories ? <IconCategoriesInactive size="xs" /> : <IconRightArrowGray size="xs" />}
          </TouchableOpacity>

          {showCategories && (
            <FlatList
              data={filteredCategories} // Show filtered categories in the FlatList
              renderItem={renderCategory}
              keyExtractor={(item) => item.id}
              numColumns={3}
              contentContainerStyle={styles.categoryList}
            />
          )}
        </View>
      </View>
    )
  );
};
