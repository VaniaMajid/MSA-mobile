import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {FC, useState, useEffect} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {AuthParamList} from '~Navigators/AuthParamList';
import {useStyles} from './SellerHomeScreen.styles';
import {useTheme} from '~Contexts/ThemeContext';
import {
  CustomModal,
  Heading,
  IconNotification,
  IconBank,
  IconProduct,
  IconShop,
  IconMail,
  IconPakistan,
  IconRightArrow,
  IconRightArrowWhite,
  OrderDetails,
  GraphComponent,
} from '~Components/index';
import {ScrollView} from 'react-native-gesture-handler';
import {Path} from '~Navigators/routes';

type Specialty = {
  name: string;
  icon: JSX.Element;
};

interface Notification {
  title: string;
  date: string;
  time: string;
  details: string;
}
interface SetupItem {
  id: number;
  title: string;
  icon: JSX.Element;
  isExpanded: boolean;
}
// Sample array of notifications with separate date and time fields
const notificationsArray: Notification[] = [
  {
    title: 'Order Placed',
    date: 'Oct 9, 2024',
    time: '14:00',
    details: 'You have a new order placed with order id: 2318',
  },
  {
    title: 'Order Shipped',
    date: 'Oct 10, 2024',
    time: '10:00',
    details: 'Your order has been shipped. Track your shipment.',
  },
  {
    title: 'Order Delivered',
    date: 'Oct 11, 2024',
    time: '09:00',
    details: 'Your order with order id: 2324 has been delivered.',
  },
];

type SellerHomeScreenProps = StackScreenProps<AuthParamList>;

export const SellerHomeScreen: FC<SellerHomeScreenProps> = ({navigation}) => {
  const styles = useStyles();
  const theme = useTheme();
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [setupSectionVisible, setSetupSectionVisible] = useState(true); // Toggle based on user details
  const [expandedSetupItem, setExpandedSetupItem] = useState<number | null>(null);

  const [latestNotification, setLatestNotification] = useState<Notification | null>(null);
  const [totalRevenue, setTotalRevenue] = useState<number>(0);
  const [totalOrders, setTotalOrders] = useState<number>(0);
  useEffect(() => {
    // Sort the array to get the latest notification based on date and time
    const sortedNotifications = notificationsArray.sort((a, b) => {
      const dateA = new Date(`${a.date} ${a.time}`);
      const dateB = new Date(`${b.date} ${b.time}`);
      return dateB.getTime() - dateA.getTime(); // Use getTime() to compare dates as numbers
    });
    // Set the latest notification
    setLatestNotification(sortedNotifications[0]);

    // Calculate total revenue and orders based on graph data
    const calculatedRevenue = graphData.reduce((acc, data) => acc + data.revenue, 0);
    const calculatedOrders = graphData.reduce((acc, data) => acc + data.orders, 0);

    setTotalRevenue(calculatedRevenue);
    setTotalOrders(calculatedOrders);
  }, []);

  const ordersCount = {
    toProcess: 5,
    shipping: 3,
    reviews: 7,
  };

  // Dummy data for the user profile
  const user = {
    profileImage: require('../../../Assets/images/onboarding1.png'),
    name: 'Nadeem Electronics',
    phoneNumber: '+123456789',
    nationality: 'Pakistani',
  };

  const handleNotificationPress = () => {
    navigation.navigate(Path.NOTIFICATION_SCREEN);
  };
  const handleOptionPress = (option: string) => {
    console.log(`${option} clicked`);
    // Add navigation or functionality based on the option selected
  };
  const handleTrackSalesPress = () => {
    navigation.navigate(Path.TRACK_SALES_SCREEN);
  }
  

  const setupItems: SetupItem[] = [
    { id: 1, title: 'Add your Email', icon: <IconMail size="xs" />, isExpanded: false },
    { id: 2, title: 'Add Shop Address', icon: <IconShop size="xs" />, isExpanded: false },
    { id: 3, title: 'Add ID & Bank Documents', icon: <IconBank size="xs" />, isExpanded: false },
    { id: 4, title: 'Upload at least 1 Product', icon: <IconProduct size="xs" />, isExpanded: false },
  ];
  const graphData = [
    {day: 'Mon', orders: 10, revenue: 1030},
    {day: 'Tue', orders: 25, revenue: 1530},
    {day: 'Wed', orders: 8, revenue: 800},
    {day: 'Thu', orders: 26, revenue: 2040},
    {day: 'Fri', orders: 12, revenue: 1250},
    {day: 'Sat', orders: 8, revenue: 18110},
    {day: 'Sun', orders: 45, revenue: 2530},
  ];
  const toggleExpand = (itemId: number) => {
    setExpandedSetupItem(expandedSetupItem === itemId ? null : itemId);
  };


  return (
    <ScrollView style={styles.container} contentContainerStyle = {{paddingBottom: 50}}>
      {/* User Profile Section */}
      <View style={styles.profileContainer}>
        <Image source={user.profileImage} style={styles.profileImage} />

        <View style={styles.profileInfo}>
          <Text style={[theme.fonts.paragraphSemiBold, styles.userName]}>
            {user.name}
          </Text>
          <View style={[styles.subProfileInfo]}>
            <Text style={[theme.fonts.paragraphSmallSemiBold, styles.subText]}>
              {user.phoneNumber}
            </Text>
            <IconPakistan size="xxs" />
            <Text
              style={[theme.fonts.paragraphSmallSemiBold, , styles.subText]}>
              {user.nationality}
            </Text>
          </View>
        </View>
      </View>

      {/* Notification Section */}
      <View style={styles.notificationContainer}>
        <View>
          <Text
            style={[theme.fonts.subHeadingSemibold, styles.notificationText]}>
            Your Notifications
          </Text>
          {latestNotification ? ( // Check if latestNotification is not null before rendering
            <TouchableOpacity
              onPress={handleNotificationPress}
              style={styles.notificationDetails}>
              <View style={styles.notificationDetailsHeader}>
                <View style={styles.notificationInfo}>
                  <IconProduct size="xxs" />
                  <Text
                    style={[
                      theme.fonts.paragraphSmallSemiBold,
                      styles.orderTitle,
                    ]}>
                    {latestNotification.title}
                  </Text>
                </View>
                <Text
                  style={[
                    theme.fonts.paragraphRegularSmall,
                    styles.notificationDate,
                  ]}>
                  {latestNotification.date}
                </Text>
              </View>
              <View style={styles.notificationInfo}>
                <Text
                  numberOfLines={1}
                  style={[
                    theme.fonts.paragraphRegularSmall,
                    styles.notificationInfoText,
                  ]}>
                  {latestNotification.details}
                </Text>
                <IconRightArrowWhite size="xxs" />
              </View>
            </TouchableOpacity>
          ) : (
            <View style = {styles.notificationDetails}>
              <Text style={[theme.fonts.paragraphRegularSmall]}>
                No notifications available
              </Text> // Optional: Display a placeholder when there are no notifications
            </View>
          )}
        </View>
        {notificationVisible && (
          <View style={styles.notificationDetails}>
            <Text>Full notification details...</Text>
          </View>
        )}
      </View>
      {/* Setup Section */}
      {!setupSectionVisible ? (
        <View style={styles.setupContainer}>
        <Text style={[theme.fonts.subHeadingSemibold, styles.sectionHeading]}>Complete Your Setup</Text>
        {setupItems.map(item => (
          <TouchableOpacity key={item.id} style={styles.setupItem} onPress={() => toggleExpand(item.id)}>
            <View style = {styles.setupItemHeader}>
              <View style={styles.setupTextNumberContainer}>
                <Text style={[theme.fonts.paragraphRegularSmall, styles.setupItemText]}>{item.id}</Text>
              </View>
              <Text style={[theme.fonts.paragraphRegularSmall, styles.setupItemText]}>{item.title}</Text>
            </View>
            {/* Expanded view when the item is clicked */}
            {expandedSetupItem === item.id && (
              <View style={styles.expandedView}>
                {item.icon}
                <Text style={[theme.fonts.paragraphRegularSmall, styles.expandedText]}>
                  {item.title}
                </Text>
                <TouchableOpacity style={styles.addButton}>
                  <Text style={[theme.fonts.buttonSemiBold, styles.addButtonText]}>Add</Text>
                </TouchableOpacity>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </View>
      ) : (
        // Order Details Section
        <View>
          <View style={styles.orderDetailsContainer}>
            <OrderDetails
              ordersCount={ordersCount}
              onOptionPress={handleOptionPress}
            />
          </View>
          <TouchableOpacity style = {styles.graphSection} onPress={handleTrackSalesPress}>
            <View style = {styles.graphSectionHeader}>
              <View>
                <Text style={[theme.fonts.paragraphSmallSemiBold, styles.graphSectionHeading]}>
                  Revenue This Week
                </Text>
                <Text style={[theme.fonts.paragraphSemiBold, styles.graphSectionSubText]}>
                  Rs. {totalRevenue}
                </Text>
              </View>
              <View>
                <Text style={[theme.fonts.paragraphSmallSemiBold, styles.graphSectionHeading]}>
                  Total Orders Placed
                </Text>
                <Text style={[theme.fonts.paragraphSemiBold, styles.graphSectionSubText]}>
                  {totalOrders}
                </Text>
              </View>
              
            </View>
            <GraphComponent data={graphData} />
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
};
