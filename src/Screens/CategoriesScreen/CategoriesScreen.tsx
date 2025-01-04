import React, {FC, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
} from 'react-native';
import {useStyles} from './CategoriesScreen.styles';
import {useTheme} from '~Contexts/ThemeContext';
import {AuthParamList} from '~Navigators/AuthParamList';
import {StackScreenProps} from '@react-navigation/stack';
import {IconCategoriesActive} from '~Components/Icons';
import RNPickerSelect from 'react-native-picker-select';
import {SearchBar} from '~Components/SearchBar';

type CategoriesScreenProps = StackScreenProps<AuthParamList>;

interface Category {
  id: string;
  name: string;
  image: any;
  type: string; // New field to filter by high-level category
}

interface Category {
  id: string;
  name: string;
  image: any;
  type: string;
}

const categories: Category[] = [
  {
    id: '1',
    name: 'Electronics',
    image: require('../../Assets/images/products/laptop4.jpeg'),
    type: 'Electronics',
  },
  {
    id: '2',
    name: 'Fashion',
    image: require('../../Assets/images/products/camera4.jpeg'),
    type: 'Fashion',
  },
  {
    id: '3',
    name: 'Men',
    image: require('../../Assets/images/products/chair2.jpeg'),
    type: 'Fashion',
  },
  {
    id: '4',
    name: 'Home Appliances',
    image: require('../../Assets/images/products/tv3.jpeg'),
    type: 'Home Appliances',
  },
  {
    id: '5',
    name: 'Watches',
    image: require('../../Assets/images/productImg3.png'),
    type: 'Fashion',
  },
  {
    id: '6',
    name: 'Footwear',
    image: require('../../Assets/images/productImg1.png'),
    type: 'Fashion',
  },
  {
    id: '7',
    name: 'Jewelry',
    image: require('../../Assets/images/productImg3.png'),
    type: 'Fashion',
  },
  {
    id: '8',
    name: 'Beauty Products',
    image: require('../../Assets/images/productImg1.png'),
    type: 'Beauty',
  },
  {
    id: '9',
    name: 'Books',
    image: require('../../Assets/images/productImg2.png'),
    type: 'Books',
  },
  {
    id: '10',
    name: 'Toys',
    image: require('../../Assets/images/productImg1.png'),
    type: 'Toys',
  },
  {
    id: '11',
    name: 'Sports Equipment',
    image: require('../../Assets/images/productImg2.png'),
    type: 'Sports',
  },
  {
    id: '12',
    name: 'Health & Fitness',
    image: require('../../Assets/images/productImg3.png'),
    type: 'Health',
  },
  {
    id: '13',
    name: 'Outdoor Gear',
    image: require('../../Assets/images/productImg2.png'),
    type: 'Outdoor',
  },
  {
    id: '14',
    name: 'Gardening Tools',
    image: require('../../Assets/images/productImg3.png'),
    type: 'Home & Garden',
  },
  {
    id: '15',
    name: 'Pet Supplies',
    image: require('../../Assets/images/productImg1.png'),
    type: 'Pets',
  },
  {
    id: '16',
    name: 'Stationery',
    image: require('../../Assets/images/productImg3.png'),
    type: 'Stationery',
  },
  {
    id: '17',
    name: 'Craft Supplies',
    image: require('../../Assets/images/productImg1.png'),
    type: 'Crafts',
  },
  {
    id: '18',
    name: 'Office Supplies',
    image: require('../../Assets/images/productImg2.png'),
    type: 'Office',
  },
  {
    id: '19',
    name: 'Musical Instruments',
    image: require('../../Assets/images/productImg1.png'),
    type: 'Music',
  },
  {
    id: '20',
    name: 'Baby Products',
    image: require('../../Assets/images/productImg2.png'),
    type: 'Baby',
  },
  {
    id: '21',
    name: 'Grocery',
    image: require('../../Assets/images/productImg3.png'),
    type: 'Grocery',
  },
  {
    id: '22',
    name: 'Luggage & Bags',
    image: require('../../Assets/images/productImg2.png'),
    type: 'Fashion',
  },
  {
    id: '23',
    name: 'Virtual Reality Gear',
    image: require('../../Assets/images/productImg1.png'),
    type: 'Electronics',
  },
  {
    id: '24',
    name: 'Beverages',
    image: require('../../Assets/images/productImg3.png'),
    type: 'Grocery',
  },
  {
    id: '25',
    name: 'Travel Accessories',
    image: require('../../Assets/images/productImg1.png'),
    type: 'Travel',
  },
];

export const CategoriesScreen: FC<CategoriesScreenProps> = ({navigation}) => {
  const styles = useStyles();
  const theme = useTheme();

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCategories, setFilteredCategories] = useState(categories);
  const [selectedFilter, setSelectedFilter] = useState('All'); // Filter state

  const uniqueTypes = Array.from(
    new Set(categories.map(category => category.type)),
  );

  // Generate filter options based on unique types
  const filterOptions = [
    {label: 'All', value: 'All'},
    ...uniqueTypes.map(type => ({label: type, value: type})),
  ];

  // Filter categories based on search and selected filter
  const handleSearch = (query: string) => {
    setSearchQuery(query);

    let filtered = categories;
    if (query.trim() !== '') {
      filtered = filtered.filter(category =>
        category.name.toLowerCase().includes(query.toLowerCase()),
      );
    }

    if (selectedFilter !== 'All') {
      filtered = filtered.filter(category => category.type === selectedFilter);
    }

    setFilteredCategories(filtered);
  };

  // Handle filter dropdown selection
  const handleFilterChange = (value: string) => {
    setSelectedFilter(value);

    let filtered = categories;
    if (searchQuery.trim() !== '') {
      filtered = filtered.filter(category =>
        category.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    if (value !== 'All') {
      filtered = filtered.filter(category => category.type === value);
    }

    setFilteredCategories(filtered);
  };

  const renderCategory = ({item}: {item: Category}) => (
    <TouchableOpacity
      onPress={() => console.log(`Selected category: ${item.name}`)}
      style={styles.categoryItem}>
      <Image source={item.image} style={styles.categoryImage} />
      <Text style={[theme.fonts.paragraphRegularSmall, styles.categoryName]}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.browseCategories}>
        <Text
          style={[theme.fonts.paragraphRegular, styles.browseCategoriesText]}>
          Browse Categories
        </Text>
        <IconCategoriesActive size="xxs" />
      </View>
      <SearchBar
        value={searchQuery}
        onChangeText={handleSearch}
        placeholder="Search categories..."
      />
      {/* Dropdown for filtering categories */}
      <RNPickerSelect
        onValueChange={value => handleFilterChange(value)}
        items={filterOptions}
        dropdownItemStyle={theme.fonts.paragraphRegular} // Custom styles for dropdown items
        value={selectedFilter}
        style={{
          inputIOS: styles.dropdown, // Custom styles for iOS
          inputAndroid: styles.dropdown, // Custom styles for Android
          placeholder: {
            color: theme.colors.black, // Placeholder text color
          },
        }}
        placeholder={{label: 'Filter by category', value: 'All'}} // Set value to null for placeholder
      ></RNPickerSelect>
      {/* Filtered Categories List */}
      <FlatList
        data={filteredCategories}
        renderItem={renderCategory}
        keyExtractor={item => item.id}
        numColumns={3}
        contentContainerStyle={styles.categoryList}
      />
    </View>
  );
};
