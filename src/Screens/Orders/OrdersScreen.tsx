import React, {FC, useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import {useStyles} from './OrdersScreen.styles';
import {OrderType} from './types';
import {useTheme} from '~Contexts/ThemeContext';
import {StackScreenProps} from '@react-navigation/stack';
import {AuthParamList} from '~Navigators/AuthParamList';
import {SearchBar} from '~Components/SearchBar';
import {ScrollView} from 'react-native-gesture-handler';
import {IconMenu, IconShare, IconCheck} from '~Components/Icons';
import {Button} from '~Components/Button';

type OrdersScreenProps = StackScreenProps<AuthParamList>;

const ordersData: OrderType[] = [
  {
    id: '1',
    customerName: 'John Doe',
    orderDate: '2024-10-15',
    status: 'Active',
    price: 2000,
    imageUrl: require('../../Assets/images/productImg1.png'),
    nameEn: 'Laptop',
    nameUr: 'پروڈکٹ 1',
  },
  {
    id: '2',
    customerName: 'Jane Smith',
    orderDate: '2024-10-12',
    status: 'Pending',
    price: 1500,
    imageUrl: require('../../Assets/images/productImg2.png'), 
    nameEn: 'Aesthetic Watch',
    nameUr: 'پروڈکٹ 2',
  },
  {
    id: '3',
    customerName: 'Ali Khan',
    orderDate: '2024-10-10',
    status: 'Inactive',
    price: 3000,
    imageUrl: require('../../Assets/images/productImg3.png'),
    nameEn: 'Mobile Phone',
    nameUr: 'پروڈکٹ 3',
  },
  // Add more order data as needed
];
export const OrdersScreen: FC<OrdersScreenProps> = ({navigation}) => {
  const styles = useStyles();
  const theme = useTheme();
  const [orders, setOrders] = useState<OrderType[]>(ordersData);
  const [filteredOrders, setFilteredOrders] = useState<OrderType[]>(ordersData);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    filterOrders(selectedFilter, query);
  };

  const toggleOrderStatus = (id: string) => {
    const updatedOrders = orders.map(order =>
      order.id === id
        ? {
            ...order,
            status: order.status === 'Active' ? 'Inactive' : 'Active',
          }
        : order,
    );
    setOrders(updatedOrders);
    setActiveMenu(null); // Close the menu after updating status

    filterOrders(selectedFilter, searchQuery); // Re-filter the list after updating
  };

  const renderOrderItem = ({item}: {item: OrderType}) => (
    <View style={styles.orderCard}>
      <View style={styles.orderInfo}>
        <Text style={[theme.fonts.paragraphSemiBold, styles.customerName]}>
          {item.customerName}
        </Text>
        <Text style={[theme.fonts.paragraphRegularSmall, styles.orderId]}>
          Order ID: {item.id}
        </Text>
        <Text style={[theme.fonts.paragraphRegularSmall, styles.productNameEn]}>
          {item.nameEn}
        </Text>
        <Text style={[theme.fonts.paragraphRegularSmall, styles.productNameUr]}>
          {item.nameUr}
        </Text>
        <Text style={[theme.fonts.paragraphRegularSmall, styles.orderDate]}>
          Order Date: {item.orderDate}
        </Text>
        <Text style={[theme.fonts.paragraphRegularSmall, styles.orderAmount]}>
          Amount: Rs. {item.price}
        </Text>
        <Text style={[theme.fonts.paragraphRegularSmall, styles.orderStatus]}>
          Status: {item.status}
        </Text>
      </View>
      <View>
        <Image source={item.imageUrl} style={styles.productImage} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => setActiveMenu(activeMenu === item.id ? null : item.id)}>
          <IconMenu size="xxs" />
        </TouchableOpacity>
      </View>
  
      {/* Hidden Menu for Activation/Deactivation */}
      {activeMenu === item.id && (
        <View style={styles.hiddenMenu}>
          <TouchableOpacity onPress={() => toggleOrderStatus(item.id)}>
            <Text style={[theme.fonts.paragraphRegularSmall, styles.menuOption]}>
              {item.status === 'Active' ? 'Deactivate' : 'Activate'} Order
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );

  const filterOrders = (filter: string, query: string = searchQuery) => {
    let updatedOrders = orders;

    if (filter !== 'All') {
      updatedOrders = orders.filter(order => order.status === filter);
    }

    if (query) {
      updatedOrders = updatedOrders.filter(order =>
        order.customerName.toLowerCase().includes(query.toLowerCase()),
      );
    }

    setFilteredOrders(updatedOrders);
  };

  useEffect(() => {
    filterOrders(selectedFilter, searchQuery);
  }, [orders]);

  useEffect(() => {
    filterOrders(selectedFilter);
  }, [selectedFilter]);

  const renderFilterButtons = () => (
    <ScrollView horizontal contentContainerStyle={styles.filterContainer}>
      {['All', 'Active', 'Inactive', 'Pending'].map(filter => (
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
        data={filteredOrders}
        renderItem={renderOrderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
