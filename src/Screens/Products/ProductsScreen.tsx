import React, {FC, useEffect, useState} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {useStyles} from './ProductsScreen.styles';
import {ProductType} from './types';
import {useTheme} from '~Contexts/ThemeContext';
import {StackScreenProps} from '@react-navigation/stack';
import {AuthParamList} from '~Navigators/AuthParamList';
import {SearchBar} from '~Components/SearchBar';
import {ScrollView} from 'react-native-gesture-handler';
import {IconMenu, IconShare, IconCheck} from '~Components/Icons';
import {InputField} from '~Components/TextInput';
import {Button} from '~Components/Button';

type ProductsScreenProps = StackScreenProps<AuthParamList>;

const productsData: ProductType[] = [
  {
    id: '1',
    nameEn: 'Smartphone',
    nameUr: 'اسمارٹ فون',
    category: 'Electronics',
    price: 1000,
    status: 'Active',
    stock: 10,
    imageUrl: require('../../Assets/images/productImg1.png'),
  },
  {
    id: '2',
    nameEn: 'Washing Machine',
    nameUr: 'واشنگ مشین',
    category: 'Home Appliances',
    price: 500,
    status: 'Pending QC',
    stock: 10,
    imageUrl: require('../../Assets/images/productImg2.png'),
  },
  {
    id: '3',
    nameEn: 'Laptop',
    nameUr: 'لیپ ٹاپ',
    category: 'Electronics',
    price: 1500,
    status: 'Inactive',
    stock: 10,
    imageUrl: require('../../Assets/images/productImg3.png'),
  },
  {
    id: '4',
    nameEn: 'Smartphone',
    nameUr: 'اسمارٹ فون',
    category: 'Electronics',
    price: 1000,
    status: 'Active',
    stock: 10,
    imageUrl: require('../../Assets/images/productImg1.png'),
  },
  {
    id: '5',
    nameEn: 'Washing Machine',
    nameUr: 'واشنگ مشین',
    category: 'Home Appliances',
    price: 500,
    status: 'Pending QC',
    stock: 10,
    imageUrl: require('../../Assets/images/productImg2.png'),
  },
  {
    id: '6',
    nameEn: 'Laptop',
    nameUr: 'لیپ ٹاپ',
    category: 'Electronics',
    price: 1500,
    status: 'Inactive',
    stock: 10,
    imageUrl: require('../../Assets/images/productImg3.png'),
  },
  {
    id: '7',
    nameEn: 'Smartphone',
    nameUr: 'اسمارٹ فون',
    category: 'Electronics',
    price: 1000,
    status: 'Active',
    stock: 10,
    imageUrl: require('../../Assets/images/productImg1.png'),
  },
  {
    id: '8',
    nameEn: 'Washing Machine',
    nameUr: 'واشنگ مشین',
    category: 'Home Appliances',
    price: 500,
    status: 'Pending QC',
    stock: 10,
    imageUrl: require('../../Assets/images/productImg2.png'),
  },
  {
    id: '9',
    nameEn: 'Laptop',
    nameUr: 'لیپ ٹاپ',
    category: 'Electronics',
    price: 1500,
    status: 'Inactive',
    stock: 10,
    imageUrl: require('../../Assets/images/productImg3.png'),
  },
];

export const ProductsScreen: FC<ProductsScreenProps> = ({navigation}) => {
  const styles = useStyles();
  const theme = useTheme();
  const [products, setProducts] = useState<ProductType[]>(productsData);
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>(productsData);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [isEditingPrice, setIsEditingPrice] = useState<string | null>(null);
  const [isEditingStock, setIsEditingStock] = useState<string | null>(null);
  const [price, setPrice] = useState<number | null>(null);
  const [stock, setStock] = useState<number | null>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    filterProducts(selectedFilter, query);
  };

  const updateProduct = (id: string, newPrice: number | null, newStock: number | null) => {
    const updatedProducts = products.map(product =>
      product.id === id
        ? {
            ...product,
            price: newPrice ?? product.price,
            stock: newStock ?? product.stock,
          }
        : product,
    );
    setProducts(updatedProducts);
    filterProducts(selectedFilter, searchQuery); // Re-filter the list after updating
  };

  const handleSave = (id: string) => {
    updateProduct(id, price, stock); // Update the product with the new price or stock
    setIsEditingPrice(null);
    setIsEditingStock(null);
    setPrice(null);
    setStock(null);
  };

  const toggleProductStatus = (id: string) => {
    const updatedProducts = products.map(product =>
      product.id === id
        ? {
            ...product,
            status: product.status === 'Active' ? 'Inactive' : 'Active',
          }
        : product,
    );
    setProducts(updatedProducts);
    setActiveMenu(null); // Close the menu after updating status

    filterProducts(selectedFilter, searchQuery); // Re-filter the list after updating
  };

  const renderProductItem = ({item}: {item: ProductType}) => (
    <View style={styles.productCard}>
      <View style={styles.productImageAndInfo}>
        <Image source={item.imageUrl} style={styles.productImage} />
        <View>
          <Text style={[theme.fonts.paragraphSemiBold, styles.productName]}>{item.nameEn}</Text>
          <Text style={[theme.fonts.paragraphRegularSmall, styles.productName]}>{item.nameUr}</Text>
          <Text style={[theme.fonts.paragraphRegularSmall, styles.productInfo]}>
            Category: {item.category}
          </Text>
          <View style={styles.priceAndStockContainer}>
            {/* Price Section */}
            {isEditingPrice === item.id ? (
              <InputField
                number = {true}
                variant="forms50"
                value={price?.toString() || ''}
                onChangeText={value => setPrice(Number(value))}
                keyboardType="numeric"
                placeholder="Enter new price"
              />
            ) : (
              <View style={styles.priceContainer}>
                <Text style={theme.fonts.paragraphRegularSmall}>Price: Rs. {item.price}</Text>
              </View>
            )}

            {/* Stock Section */}
            {isEditingStock === item.id ? (
              <InputField
                number = {true}
                variant="forms"
                style={styles.priceInput}
                value={stock?.toString() || ''}
                onChangeText={value => setStock(Number(value))}
                placeholder="Enter new stock"
              />
            ) : (
              <View style={styles.priceContainer}>
                <Text style={theme.fonts.paragraphRegularSmall}>Stock: {item.stock}</Text>
              </View>
            )}
          </View>
          {/* Confirm Button */}
          {(isEditingPrice === item.id || isEditingStock === item.id) && (
            <TouchableOpacity style = {styles.iconCheckBtn} onPress={() => handleSave(item.id)}>
              <IconCheck size="xxs" />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.editBtn}
          textStyle={theme.fonts.paragraphRegularSmall}
          variant="pear"
          onPress={() => {
            setIsEditingPrice(item.id);
            setPrice(item.price);
          }}
          title="Edit Price"
        />
        <Button
          style={styles.editBtn}
          variant="pear"
          textStyle={theme.fonts.paragraphRegularSmall}
          onPress={() => {
            setIsEditingStock(item.id);
            setStock(item.stock);
          }}
          title="Edit Stock"
        />
        <TouchableOpacity>
          <IconShare size="xxs" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveMenu(activeMenu === item.id ? null : item.id)}>
          <IconMenu size="xxs" />
        </TouchableOpacity>
      </View>

      {/* Hidden Menu for Activation/Deactivation */}
      {activeMenu === item.id && (
        <View style={styles.hiddenMenu}>
          <TouchableOpacity onPress={() => toggleProductStatus(item.id)}>
            <Text style={[theme.fonts.paragraphRegularSmall,styles.menuOption]}>
              {item.status === 'Active' ? 'Deactivate' : 'Activate'} Product
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );

  const filterProducts = (filter: string, query: string = searchQuery) => {
    let updatedProducts = products;

    if (filter !== 'All') {
      updatedProducts = products.filter(product => product.status === filter);
    }

    if (query) {
      updatedProducts = updatedProducts.filter(
        product =>
          product.nameEn.toLowerCase().includes(query.toLowerCase()) ||
          product.nameUr.includes(query),
      );
    }

    setFilteredProducts(updatedProducts);
  };

  useEffect(() => {
    filterProducts(selectedFilter, searchQuery);
  }, [products]); // This runs every time the 'products' state changes
  
  useEffect(() => {
    filterProducts(selectedFilter); // Initial filter setup
  }, [selectedFilter]);

  const renderFilterButtons = () => (
    <ScrollView horizontal contentContainerStyle={styles.filterContainer}>
      {['All', 'Active', 'Inactive', 'Pending QC'].map(filter => (
        <TouchableOpacity
          key={filter}
          style={[
            styles.filterButton,
            selectedFilter === filter && styles.activeFilterButton,
          ]}
          onPress={() => setSelectedFilter(filter)}>
          <Text
            style={[
              theme.fonts.paragraphRegularSmall,
              styles.filterButtonText,
              selectedFilter === filter && styles.activeFilterButtonText,
            ]}>
            {filter}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );

  return (
    <View style={styles.container}>
      <SearchBar value={searchQuery} onChangeText={handleSearch} />
      {renderFilterButtons()}
      <FlatList
        data={filteredProducts}
        renderItem={renderProductItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
